(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"class":"Player","data":{"name":"Player570","defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}},"gap":10,"definitions": [{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"colCount":36,"class":"TiledImageResourceLevel","height":3072,"tags":"ondemand","url":"media/panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_0/{face}/0/{row}_{column}.jpg"},{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_0/{face}/2/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_0/{face}/3/{row}_{column}.jpg"},{"width":12288,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_t.jpg"}],"thumbnailUrl":"media/panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_t.jpg","vfov":180,"hfovMin":"120%","overlays":["this.overlay_3A53F134_2E7F_3D91_41B6_699270E7E908","this.popup_3D8CE556_2E7C_C59E_416E_D26CB604857C","this.overlay_3DAE8F67_2E4D_45BF_41B1_A6F34A78A05C","this.overlay_3D15726E_2E45_5FB1_41BC_282CA319C01D","this.overlay_3A740D3F_2E44_C58F_41C5_AAF993812CE3"],"class":"Panorama","pitch":0,"id":"panorama_25F763B0_2E45_3C92_41C6_255D43D51B94","label":trans('panorama_25F763B0_2E45_3C92_41C6_255D43D51B94.label'),"hfovMax":130,"hfov":360,"data":{"subtitle":trans('panorama_25F763B0_2E45_3C92_41C6_255D43D51B94.subtitle','panorama_25F763B0_2E45_3C92_41C6_255D43D51B94.data.subtitle'),"label":"RMV Metal\u00fargica EIRELI ME"},"partial":false,"adjacentPanoramas":[{"panorama":"this.panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55","yaw":-20.05,"select":"this.overlay_3D15726E_2E45_5FB1_41BC_282CA319C01D.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":0.16,"backwardYaw":-7.83,"data":{"overlayID":"overlay_3D15726E_2E45_5FB1_41BC_282CA319C01D"}},{"panorama":"this.panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55","yaw":-122.38,"select":"this.overlay_3A740D3F_2E44_C58F_41C5_AAF993812CE3.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":0.06,"backwardYaw":-7.83,"data":{"overlayID":"overlay_3A740D3F_2E44_C58F_41C5_AAF993812CE3"}}]},{"initialPosition":{"yaw":-1.54,"pitch":-38.18,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_24413B3C_2E45_4D91_41B8_F9029BB99D40","displayMovements":[{"easing":"linear","duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","duration":3000,"targetStereographicFactor":0,"class":"TargetRotationalCameraDisplayMovement","targetPitch":-38.18}],"displayOriginPosition":{"hfov":165,"yaw":-1.54,"stereographicFactor":1,"pitch":-90,"class":"RotationalCameraDisplayPosition"},"id":"panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_camera"},{"image":"this.res_3A384F9E_2E4D_4491_41B0_7BD1A8A21D76","yaw":-9.81,"class":"PopupPanoramaOverlay","rotationY":0,"hideDuration":500,"popupDistance":100,"popupMaxWidth":"95%","rotationZ":0,"showDuration":500,"hfov":6.29,"rotationX":0,"hideEasing":"cubic_out","showEasing":"cubic_in","popupMaxHeight":"95%","pitch":-33.46,"id":"popup_3D8CE556_2E7C_C59E_416E_D26CB604857C"},{"id":"res_3A384F9E_2E4D_4491_41B0_7BD1A8A21D76","levels":[{"height":288,"width":512,"url":"media/res_3A384F9E_2E4D_4491_41B0_7BD1A8A21D76_3.jpg","class":"ImageResourceLevel"},{"height":576,"width":1024,"url":"media/res_3A384F9E_2E4D_4491_41B0_7BD1A8A21D76_2.jpg","class":"ImageResourceLevel"}],"data":{"extraLevels":[{"height":1152,"width":2048,"url":"media/res_3A384F9E_2E4D_4491_41B0_7BD1A8A21D76_1.jpg","class":"ImageResourceLevel"},{"height":2160,"width":3840,"url":"media/res_3A384F9E_2E4D_4491_41B0_7BD1A8A21D76_0.jpg","class":"ImageResourceLevel"}]},"class":"ImageResource"},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"class":"ViewerArea","subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","toolTipBorderRadius":3,"width":"100%","toolTipShadowOpacity":1,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"paddingLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","id":"MainViewer","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#000000","progressRight":0,"playbackBarHeadShadowHorizontalLength":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBarOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","progressHeight":10,"toolTipFontStyle":"normal","playbackBarBackgroundOpacity":1,"progressBarBorderRadius":0,"playbackBarProgressBorderRadius":0,"paddingTop":0,"playbackBarHeadOpacity":1,"playbackBarHeadShadowVerticalLength":0,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipShadowSpread":0,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":0,"subtitlesOpacity":1,"progressBarBorderSize":0,"toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"subtitlesBorderSize":0,"progressBorderSize":0,"subtitlesBottom":50,"progressLeft":0,"toolTipShadowColor":"#333333","surfaceReticleSelectionColor":"#FFFFFF","height":"100%","vrPointerSelectionColor":"#FF6600","subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"surfaceReticleOpacity":0.6,"subtitlesShadow":false,"toolTipPaddingTop":4,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowHorizontalLength":1,"borderRadius":0,"toolTipShadowVerticalLength":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"playbackBarHeadWidth":6,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"frames":[{"cube":{"levels":[{"width":18432,"rowCount":6,"colCount":36,"class":"TiledImageResourceLevel","height":3072,"tags":"ondemand","url":"media/panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_0/{face}/0/{row}_{column}.jpg"},{"width":9216,"rowCount":3,"colCount":18,"class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","url":"media/panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_0/{face}/1/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_0/{face}/2/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_0/{face}/3/{row}_{column}.jpg"},{"width":12288,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_t.jpg"}],"thumbnailUrl":"media/panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_t.jpg","vfov":180,"hfovMin":"120%","overlays":["this.overlay_23F8FF33_2E47_4597_41C6_360B2901263B","this.overlay_3D9623F9_2E4F_5C92_418E_BD8064289CC9"],"class":"Panorama","pitch":0,"id":"panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55","label":trans('panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55.label'),"hfovMax":130,"hfov":360,"data":{"subtitle":trans('panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55.subtitle','panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55.data.subtitle'),"label":"RMV Metal\u00fargica EIRELI ME"},"partial":false,"adjacentPanoramas":[{"panorama":"this.panorama_25F763B0_2E45_3C92_41C6_255D43D51B94","yaw":-7.83,"select":"this.overlay_23F8FF33_2E47_4597_41C6_360B2901263B.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":2.44,"backwardYaw":-20.05,"data":{"overlayID":"overlay_23F8FF33_2E47_4597_41C6_360B2901263B"}}]},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_camera","media":"this.panorama_25F763B0_2E45_3C92_41C6_255D43D51B94","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_camera","media":"this.panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"initialPosition":{"yaw":-7.87,"pitch":-24.22,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_244D9B3D_2E45_4D93_41A3_D90082120B20","id":"panorama_27AA6E8D_2E45_4773_41BE_FBCB752E0A55_camera"},{"data":{"label":"File A 2-21_BearStockMusic - Background Corporate (Full Version)"},"loop":false,"audio":{"class":"AudioResource","mp3Url":"media/audio_3F33DF50_2E45_4591_41A8_FCC6675410B4.mp3","oggUrl":"media/audio_3F33DF50_2E45_4591_41A8_FCC6675410B4.ogg"},"autoplay":true,"class":"MediaAudio","id":"audio_3F33DF50_2E45_4591_41A8_FCC6675410B4"},{"backgroundColorRatios":[0],"class":"UIComponent","data":{"name":"UIComponent17730"},"backgroundColorDirection":"vertical","backgroundOpacity":0.55,"visible":false,"paddingTop":0,"paddingLeft":0,"paddingBottom":0,"propagateClick":false,"id":"veilPopupPanorama","showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"bottom":0,"top":0,"paddingRight":0,"toolTipHorizontalAlign":"center","backgroundColor":["#000000"],"borderRadius":0,"left":0,"borderSize":0,"right":0,"minWidth":0,"shadow":false,"minHeight":0},{"backgroundColorRatios":[],"class":"ZoomImage","data":{"name":"ZoomImage17731"},"backgroundColorDirection":"vertical","backgroundOpacity":1,"visible":false,"paddingTop":0,"paddingLeft":0,"paddingBottom":0,"propagateClick":false,"id":"zoomImagePopupPanorama","bottom":0,"top":0,"paddingRight":0,"toolTipHorizontalAlign":"center","backgroundColor":[],"borderRadius":0,"left":0,"borderSize":0,"right":0,"minWidth":0,"shadow":false,"minHeight":0,"scaleMode":"custom"},{"backgroundColorRatios":[0,0.1,1],"fontWeight":"normal","class":"CloseButton","gap":5,"textDecoration":"none","backgroundOpacity":0.3,"cursor":"hand","visible":false,"paddingTop":5,"iconHeight":"100%","paddingLeft":5,"fontFamily":"Arial","horizontalAlign":"center","paddingBottom":5,"propagateClick":false,"data":{"name":"CloseButton17732"},"iconLineWidth":5,"shadowBlurRadius":6,"id":"closeButtonPopupPanorama","showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"verticalAlign":"middle","shadowSpread":1,"top":10,"shadowColor":"#000000","fontColor":"#FFFFFF","pressedIconColor":"#888888","paddingRight":5,"toolTipHorizontalAlign":"center","layout":"horizontal","iconColor":"#000000","rollOverIconColor":"#666666","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"fontSize":"1.29vmin","borderColor":"#000000","iconWidth":"100%","borderRadius":0,"mode":"push","fontStyle":"normal","borderSize":0,"right":10,"minWidth":0,"shadow":false,"minHeight":0,"backgroundColorDirection":"vertical"},{"id":"TDVAuthor","label":"by Márcio Magrin","class":"PlayerMenuItem"},{"areas":["this.HotspotPanoramaOverlayArea_3A5A2144_2E7F_3DF1_4193_900B544948D2"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_3A399F9D_2E4D_4493_419D_23104F05A15B","distance":50,"yaw":-9.81,"class":"HotspotPanoramaOverlayImage","vfov":4.86,"horizontalAlign":"center","hfov":6.29,"data":{"label":"Image"},"verticalAlign":"middle","pitch":-33.46,"scaleMode":"fit_inside"}],"data":{"label":"Image"},"enabledInCardboard":true,"id":"overlay_3A53F134_2E7F_3D91_41B6_699270E7E908"},{"areas":["this.HotspotPanoramaOverlayArea_3D299011_2E4D_3B93_4192_F33E282886D2"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_3A385F9E_2E4D_4491_41BE_E4DC571CBE7B","distance":50,"yaw":-0.89,"class":"HotspotPanoramaOverlayImage","vfov":11.87,"horizontalAlign":"center","hfov":10.5,"data":{"label":"fundo brancoRMF METALURGICA LOGO"},"verticalAlign":"middle","pitch":-16.89,"scaleMode":"fit_inside"}],"data":{"label":"fundo brancoRMF METALURGICA LOGO"},"enabledInCardboard":true,"id":"overlay_3DAE8F67_2E4D_45BF_41B1_A6F34A78A05C"},{"areas":["this.HotspotPanoramaOverlayArea_3C86130E_2E45_5D71_4196_73C547575C1E"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_3AC86B3A_2E5C_CD91_41C1_8DC31DC9757A","distance":50,"yaw":-20.05,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","horizontalAlign":"center","rotationX":7.81,"hfov":21.55,"data":{"label":"01-AIR2 TOP VOO"},"roll":-21.21,"verticalAlign":"middle","pitch":-84.78,"vfov":14.77}],"enabledInCardboard":true,"data":{"label":"01-AIR2 TOP VOO","hasPanoramaAction":true},"id":"overlay_3D15726E_2E45_5FB1_41BC_282CA319C01D"},{"areas":["this.HotspotPanoramaOverlayArea_3A52ADA5_2E44_C4B3_41A2_65480D3F3DF2"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":3.71,"roll":-121.79,"pitch":-87.88,"image":{"levels":[{"height":124,"width":596,"url":"media/panorama_25F763B0_2E45_3C92_41C6_255D43D51B94_HS_xq28iic1.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"distance":50,"yaw":-122.38,"rotationX":15.88,"hfov":17.67,"verticalAlign":"top","horizontalAlign":"left"}],"enabledInCardboard":true,"data":{"label":"Texto","hasPanoramaAction":true},"id":"overlay_3A740D3F_2E44_C58F_41C5_AAF993812CE3"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_24413B3C_2E45_4D91_41B8_F9029BB99D40"},{"areas":["this.HotspotPanoramaOverlayArea_231C8FBA_2E47_4491_41BE_DE993D660AE4"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_3C66F53D_2E45_4593_4194_2797C1C51C71","distance":50,"yaw":-7.83,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","horizontalAlign":"center","rotationX":46.39,"hfov":6.32,"data":{"label":"Image"},"verticalAlign":"middle","pitch":-34.81,"vfov":4.96}],"enabledInCardboard":true,"data":{"label":"Image","hasPanoramaAction":true},"id":"overlay_23F8FF33_2E47_4597_41C6_360B2901263B"},{"areas":["this.HotspotPanoramaOverlayArea_3D6DB492_2E4F_4491_41C2_735DCE11F810"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_3A385F9E_2E4D_4491_41BE_E4DC571CBE7B","distance":50,"yaw":-7.8,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","horizontalAlign":"center","rotationX":34.93,"hfov":10.5,"data":{"label":"fundo brancoRMF METALURGICA LOGO"},"verticalAlign":"middle","pitch":-25.42,"vfov":11.87}],"data":{"label":"fundo brancoRMF METALURGICA LOGO"},"enabledInCardboard":true,"id":"overlay_3D9623F9_2E4F_5C92_418E_BD8064289CC9"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_244D9B3D_2E45_4D93_41A3_D90082120B20"},{"click":"this.showPopupPanoramaOverlay(this.popup_3D8CE556_2E7C_C59E_416E_D26CB604857C, {'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingTop':5,'borderColor':'#000000','pressedIconLineWidth':5,'paddingLeft':5,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconHeight':20,'borderRadius':0,'pressedBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconLineWidth':5,'pressedIconColor':'#888888','rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'borderSize':0,'paddingRight':5,'paddingBottom':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical'}, this.res_3A384F9E_2E4D_4491_41B0_7BD1A8A21D76, null, null, null, false)","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_3A5A2144_2E7F_3DF1_4193_900B544948D2.toolTip'),"mapColor":"any","id":"HotspotPanoramaOverlayArea_3A5A2144_2E7F_3DF1_4193_900B544948D2"},{"levels":[{"height":101,"width":120,"url":"media/res_3A399F9D_2E4D_4493_419D_23104F05A15B_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_3A399F9D_2E4D_4493_419D_23104F05A15B"},{"toolTip":trans('HotspotPanoramaOverlayArea_3D299011_2E4D_3B93_4192_F33E282886D2.toolTip'),"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3D299011_2E4D_3B93_4192_F33E282886D2"},{"levels":[{"height":382,"width":338,"url":"media/res_3A385F9E_2E4D_4491_41BE_E4DC571CBE7B_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_3A385F9E_2E4D_4491_41BE_E4DC571CBE7B"},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3C86130E_2E45_5D71_4196_73C547575C1E"},{"levels":[{"height":477,"width":570,"url":"media/res_3AC86B3A_2E5C_CD91_41C1_8DC31DC9757A_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_3AC86B3A_2E5C_CD91_41C1_8DC31DC9757A"},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3A52ADA5_2E44_C4B3_41A2_65480D3F3DF2"},{"click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_231C8FBA_2E47_4491_41BE_DE993D660AE4.toolTip'),"mapColor":"any","id":"HotspotPanoramaOverlayArea_231C8FBA_2E47_4491_41BE_DE993D660AE4"},{"levels":[{"height":101,"width":119,"url":"media/res_3C66F53D_2E45_4593_4194_2797C1C51C71_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_3C66F53D_2E45_4593_4194_2797C1C51C71"},{"toolTip":trans('HotspotPanoramaOverlayArea_3D6DB492_2E4F_4491_41C2_735DCE11F810.toolTip'),"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3D6DB492_2E4F_4491_41C2_735DCE11F810"}],"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":0.75,"width":"100%","paddingTop":0,"paddingLeft":0,"mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"overflow":"hidden","id":"rootPlayer","scrollBarMargin":2,"verticalAlign":"top","defaultVRPointer":"laser","paddingRight":0,"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","backgroundColor":["#FFFFFF"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","menu":["this.TDVAuthor"],"scripts":{"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"mixObject":TDV.Tour.Script.mixObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"shareSocial":TDV.Tour.Script.shareSocial,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"existsKey":TDV.Tour.Script.existsKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getKey":TDV.Tour.Script.getKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"downloadFile":TDV.Tour.Script.downloadFile,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openLink":TDV.Tour.Script.openLink,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"isPanorama":TDV.Tour.Script.isPanorama,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playAudioList":TDV.Tour.Script.playAudioList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMainViewer":TDV.Tour.Script.getMainViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPixels":TDV.Tour.Script.getPixels,"quizFinish":TDV.Tour.Script.quizFinish,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setValue":TDV.Tour.Script.setValue,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlays":TDV.Tour.Script.getOverlays,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showWindow":TDV.Tour.Script.showWindow,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setLocale":TDV.Tour.Script.setLocale,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"initQuiz":TDV.Tour.Script.initQuiz,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"historyGoForward":TDV.Tour.Script.historyGoForward,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"translate":TDV.Tour.Script.translate,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech},"start":"this.playAudioList([this.audio_3F33DF50_2E45_4591_41A8_FCC6675410B4], true); this.init()","downloadEnabled":false,"borderSize":0,"minWidth":20,"shadow":false,"minHeight":20,"backgroundColorDirection":"vertical"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Sun Sep 11 2022