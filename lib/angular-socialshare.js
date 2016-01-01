/*global angular*/
/*eslint no-loop-func:0, func-names:0*/

(function withAngular(angular) {
  'use strict';

  var directiveName = 'socialshare'
    , socialshareProviderNames = ['facebook','twitter','linkedin','google+','pinterest','tumblr','reddit','stumbleupon','buffer','digg','delicious','vk','pocket','wordpress','flipboard','xing','hackernews']
    , socialshareConfigurationProvider = function socialshareConfigurationProvider() {

        var socialshareConfigurationDefault = [{
                    'provider': 'facebook',
                      'conf': {
                        'url':'',
                        'text': '',
                        'media': '',
                        'type': '',
                        'via': '',
                        'to': '',
                        'from': '',
                        'ref': '',
                        'display': '',
                        'source': '',
                        'caption': '',
                        'redirect-uri': '',
                        'trigger': 'click',
                        'popupHeight': 300,
                        'popupWidth' :400
                      }
                    },
                    {
                      'provider': 'twitter',
                      'conf': {
                        'url': '',
                        'text': '',
                        'via': '',
                        'hashtags': '',
                        'trigger': 'click',
                        'popupHeight': 300,
                        'popupWidth' :400
                      }
                    },
                    {
                        'provider': 'linkedin',
                        'conf': {
                            'url': '',
                            'text': '',
                            'description': '',
                            'source': '',
                            'trigger': 'click',
                            'popupHeight': 300,
                            'popupWidth': 400
                        }
                    },
                    {
                      'provider': 'reddit',
                      'conf': {
                        'url': '',
                        'text': '',
                        'subreddit': '',
                        'trigger': 'click',
                        'popupHeight': 300,
                        'popupWidth' :400
                      }
                    },
                      {
                          'provider': 'vk',
                          'conf': {
                              'url': '',
                              'text': '',
                              'media': '',
                              'trigger': 'click',
                              'popupHeight': 300,
                              'popupWidth' :400
                          }
                      },
                        {
                            'provider': 'digg',
                            'conf': {
                                'url': '',
                                'text': '',
                                'media': '',
                                'trigger': 'click',
                                'popupHeight': 300,
                                'popupWidth' :400
                            }
                        },
                         {
                             'provider': 'delicious',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'media': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'stumbleupon',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'media': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'pinterest',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'media': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'google+',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'media': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'tumblr',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'media': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'buffer',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'via': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'pocket',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'flipboard',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'hackernews',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'wordpress',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'media': '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                         {
                             'provider': 'xing',
                             'conf': {
                                 'url': '',
                                 'text': '',
                                 'media': '',
                                 'follow' : '',
                                 'trigger': 'click',
                                 'popupHeight': 300,
                                 'popupWidth' :400
                             }
                         },
                 ]

        return {

            'configure': function configure(configuration) {

                var configIndex = 0
                ,   internIndex = 0;


                if (configuration && configuration.length > 0) {
                    for (; configIndex < configuration.length; configIndex += 1) {
                        if (configuration[configIndex].provider && socialshareProviderNames.indexOf(configuration[configIndex].provider) > -1) {

                            for (; internIndex < socialshareConfigurationDefault.length; internIndex += 1) {
                                var configElement = socialshareConfigurationDefault[internIndex];

                                if (configElement && configElement.provider && configuration[configIndex].provider == configElement.provider) {
                                    var configurationKeys = Object.keys(configElement.conf)
                                          , configurationIndex = 0
                                          , aConfigurationKey;

                                    for (; configurationIndex < configurationKeys.length; configurationIndex += 1) {

                                        aConfigurationKey = configurationKeys[configurationIndex];
                                        if (aConfigurationKey && configuration[configIndex].conf[aConfigurationKey]) {

                                            configElement.conf[aConfigurationKey] = configuration[configIndex].conf[aConfigurationKey];
                                        }
                                    }
                                }

                            }


                        } else {
                            console.log('Invalid provider at element ' + configIndex + ' with name:' + configuration[configIndex].provider);
                        } 
                    }
                }
 
            }
            , '$get': /*@ngInject*/ function instantiateProvider() {

                return socialshareConfigurationDefault;
            }
        }
    }                                                                                        
    , socialshareDirective = /*@ngInject*/ function socialshareDirective($window, $location, socialshareConf) {

        var linkingFunction = function linkingFunction($scope, element, attrs) {

            // observe the values in each of the properties so that if they're updated elsewhere,
            // they are updated in this directive.
            var key = '',
                configurationElement = null,
                index = 0;
            //looking into configuration if there is a config for the current provider
            for (; index < socialshareConf.length; index += 1) {
                if (socialshareConf[index].provider == attrs.socialshareProvider) {
                    configurationElement = socialshareConf[index];
                    break;
                }
            }

            if (configurationElement == null) {
                console.log('Cannot find configuration for provider : ' + attrs.socialshareProvider);
                return;
            }

            if (socialshareProviderNames.indexOf(configurationElement.provider) == -1) {
                console.log('Invalid Provider Name : ' + attrs.socialshareProvider);
                return;
            }
 
            //if some attribute is not define provide a default one
            attrs.socialshareUrl = attrs.socialshareUrl || configurationElement.conf.url;
            attrs.socialshareText = attrs.socialshareText || configurationElement.conf.text; 
            attrs.socialshareMedia = attrs.socialshareMedia || configurationElement.conf.media;
            attrs.socialshareType =  attrs.socialshareType || configurationElement.conf.type;
            attrs.socialshareVia = attrs.socialshareVia || configurationElement.conf.via;
            attrs.socialshareTo =  attrs.socialshareTo || configurationElement.conf.to;
            attrs.socialshareFrom =  attrs.socialshareFrom || configurationElement.conf.from;
            attrs.socialshareRef = attrs.socialshareRef || configurationElement.conf.ref;
            attrs.socialshareDislay = attrs.socialshareDislay || configurationElement.conf.display;
            attrs.socialshareSource = attrs.socialshareSource || configurationElement.conf.source;
            attrs.socialshareCaption = attrs.socialshareCaption || configurationElement.conf.caption;
            attrs.socialshareRedirectUri = attrs.socialshareRedirectUri || configurationElement.conf.redirectUri;
            attrs.socialshareTrigger =  attrs.socialshareTrigger || configurationElement.conf.trigger;
            attrs.socialsharePopupHeight = attrs.socialsharePopupHeight || configurationElement.conf.popupHeight;
            attrs.socialsharePopupWidth = attrs.socialsharePopupWidth || configurationElement.conf.popupWidth;
            attrs.socialshareSubreddit = attrs.socialshareSubreddit || configurationElement.conf.subreddit;
            attrs.socialshareDescription = attrs.socialshareDescription || configurationElement.conf.description;
          
            var onEventTriggered = function onEventTriggered() {

                switch (configurationElement.provider) {
                    case 'facebook': {

                        facebookShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'google+': {

                        googlePlusShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'twitter': {

                        twitterShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'stumbleupon': {

                        stumbleuponShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'reddit': {

                        redditShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'pinterest': {

                        pinterestShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'linkedin': {

                        linkedinShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'digg': {

                        diggShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'tumblr': {

                        tumblrShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'delicious': {

                        deliciousShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'vk': {

                        vkShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'buffer': {

                        bufferShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'pocket': {

                        pocketShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'wordpress': {

                        wordpressShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'flipboard': {

                        flipboardShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'hackernews': {

                        hackernewsShare($window, $location, configurationElement.conf);
                        break;
                    }

                    case 'xing': {

                        xingShare($window, $location, configurationElement.conf);
                        break;
                    }

                    default: {
                        return;
                    }
                }
            };

            element.bind(configurationElement.conf.trigger, onEventTriggered);
        };

        return {
            'restrict': 'A',
            'link': linkingFunction
        };
    }
   , manageFacebookShare = function manageFacebookShare($window, $location, data) {

       if (data.type && data.type === 'feed') {

           // if user specifies that they want to use the Facebook feed dialog (https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4)
           var urlString = 'https://www.facebook.com/dialog/feed?display=popup&app_id=' + encodeURI(data.via) + '&redirect_uri=' + encodeURI(data.redirectUri);

           if (data.url) {
               urlString += '&link=' + encodeURIComponent(data.url);
           }

           if (data.to) {
               urlString += '&to=' + encodeURIComponent(data.to);
           }
           if (data.display) {
               urlString += '&display=' + encodeURIComponent(data.display);
           }

           if (data.ref) {
               urlString += '&ref=' + encodeURIComponent(data.ref);
           }

           if (data.from) {
               urlString += '&from=' + encodeURIComponent(data.from);
           }

           if (data.description) {
               urlString += '&description=' + encodeURIComponent(data.description);
           }

           if (data.text) {
               urlString += '&name=' + encodeURIComponent(data.text);
           }

           if (data.caption) {
               urlString += '&caption=' + encodeURIComponent(data.caption);
           }

           if (data.media) {
               urlString += '&picture=' + encodeURIComponent(data.media);
           }

           if (data.source) {
               urlString += '&source=' + encodeURIComponent(data.source);
           }

           $window.open(
             urlString,
             'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);

       } else {

           //otherwise default to using sharer.php
           $window.open(
             'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(data.url || $location.absUrl())
             , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
       }
   }

         , manageTwitterShare = function manageTwitterShare($window, $location, data) {
             var urlString = 'https://www.twitter.com/intent/tweet?';

             if (data.text) {
                 urlString += 'text=' + encodeURIComponent(data.text);
             }

             if (data.via) {
                 urlString += '&via=' + encodeURI(data.via);
             }

             if (data.hashtags) {
                 urlString += '&hashtags=' + encodeURI(data.hashtags);
             }

             //default to the current page if a URL isn't specified
             urlString += '&url=' + encodeURIComponent(data.url || $location.absUrl());

             $window.open(
               urlString,
               'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
             );

         }

         , manageGooglePlusShare = function manageGooglePlusShare($window, $location, data) {

             $window.open(
               'https://plus.google.com/share?url=' + encodeURIComponent(data.url || $location.absUrl())
               , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

         , manageRedditShare = function manageRedditShare($window, $location, data) {
             var urlString = 'https://www.reddit.com/';

             if (data.subreddit) {
                 urlString += 'r/' + data.subreddit + '/submit?url=';
             } else {
                 urlString += 'submit?url=';
             }

             /*-
              * Reddit isn't responsive and at default width for our popups (500 x 500), everything is messed up.
              * So, overriding the width if it is less than 900 (played around to settle on this) and height if
              * it is less than 650px.
             */
             if (data.popupWidth < 900) {
                 data.popupWidth = 900;
             }

             if (data.popupHeight < 650) {
                 data.popupHeight = 650;
             }

             $window.open(
               urlString + encodeURIComponent(data.url || $location.absUrl()) + '&title=' + encodeURIComponent(data.text)
               , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

         , manageStumbleuponShare = function manageStumbleuponShare($window, $location, data) {

             $window.open(
               'https://www.stumbleupon.com/submit?url=' + encodeURIComponent(data.url || $location.absUrl()) + '&title=' + encodeURIComponent(data.text)
               , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

         , manageLinkedinShare = function manageLinkedinShare($window, $location, data) {
             /*
              * Refer: https://developer.linkedin.com/docs/share-on-linkedin
              * Tab: Customized URL
              */
             var urlString = 'https://www.linkedin.com/shareArticle?mini=true';

             urlString += '&url=' + encodeURIComponent(data.url || $location.absUrl());

             if (data.text) {
                 urlString += '&title=' + encodeURIComponent(data.text);
             }

             if (data.description) {
                 urlString += '&summary=' + encodeURIComponent(data.description);
             }

             if (data.source) {
                 urlString += '&source=' + encodeURIComponent(data.source);
             }

             $window.open(
                 urlString,
                 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

         , managePinterestShare = function managePinterestShare($window, $location, data) {

             $window.open(
               'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(data.url || $location.absUrl()) + '&media=' + encodeURI(data.media) + '&description=' + encodeURIComponent(data.text)
               , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

         , manageDiggShare = function manageDiggShare($window, $location, data) {

             $window.open(
               'https://www.digg.com/submit?url=' + encodeURIComponent(data.url || $location.absUrl()) + '&title=' + encodeURIComponent(data.text)
               , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

         , manageTumblrShare = function manageTumblrShare($window, $location, data) {

             if (data.media) {
                 var urlString = 'https://www.tumblr.com/share/photo?source=' + encodeURIComponent(data.media);

                 if (data.text) {
                     urlString += '&caption=' + encodeURIComponent(data.text);
                 }

                 $window.open(
                     urlString,
                     'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
             } else {

                 $window.open(
                     'https://www.tumblr.com/share/link?url=' + encodeURIComponent(data.url) + '&description=' + encodeURIComponent(data.text)
                     , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
             }
         }

         , manageVkShare = function manageVkShare($window, $location, data) {

             $window.open(
               'https://www.vk.com/share.php?url=' + encodeURIComponent(data.url || $location.absUrl())
               , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

         , manageDeliciousShare = function manageDeliciousShare($window, $location, data) {

             $window.open(
               'https://www.delicious.com/save?v=5&noui&jump=close&url=' + encodeURIComponent(data.url || $location.absUrl()) + '&title=' + encodeURIComponent(data.text)
               , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

         , manageBufferShare = function manageBufferShare($window, $location, data) {
             var urlString = 'https://bufferapp.com/add?';

             if (data.text) {
                 urlString += 'text=' + encodeURIComponent(data.text);
             }

             if (data.via) {
                 urlString += '&via=' + encodeURI(data.via);
             }

             //default to the current page if a URL isn't specified
             urlString += '&url=' + encodeURIComponent(data.url || $location.absUrl());

             $window.open(
               urlString,
               'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
             );
         }

         , manageHackernewsShare = function manageHackernewsShare($window, $location, data) {
             var urlString = 'https://news.ycombinator.com/submitlink?';

             if (data.text) {
                 urlString += 't=' + encodeURIComponent(data.text) + '&';
             }

             //default to the current page if a URL isn't specified
             urlString += 'u=' + encodeURIComponent(data.url || $location.absUrl());

             $window.open(
               urlString,
               'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
             );
         }

         , manageFlipboardShare = function manageFlipboardShare($window, $location, data) {
             var urlString = 'https://share.flipboard.com/bookmarklet/popout?v=2&';

             if (data.text) {
                 urlString += 'title=' + encodeURIComponent(data.text) + '&';
             }

             //default to the current page if a URL isn't specified
             urlString += 'url=' + encodeURIComponent(data.url || $location.absUrl());

             $window.open(
               urlString,
               'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
             );
         }

         , managePocketShare = function managePocketShare($window, $location, data) {
             var urlString = 'https://getpocket.com/save?';

             if (data.text) {
                 urlString += 'text=' + encodeURIComponent(data.text) + '&';
             }

             //default to the current page if a URL isn't specified
             urlString += 'url=' + encodeURIComponent(data.url || $location.absUrl());

             $window.open(
               urlString,
               'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
             );
         }

         , manageWordpressShare = function manageWordpressShare($window, $location, data) {
             var urlString = 'http://wordpress.com/press-this.php?';

             if (data.text) {
                 urlString += 't=' + encodeURIComponent(data.text) + '&';
             }
             if (data.media) {
                 urlString += 'i=' + encodeURIComponent(data.media) + '&';
             }

             //default to the current page if a URL isn't specified
             urlString += 'u=' + encodeURIComponent(data.url || $location.absUrl());

             $window.open(
               urlString,
               'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
             );
         }

         , manageXingShare = function manageXingShare($window, $location, data) {
             var followUrl = '';

             if (data.follow) {
                 followUrl = '&follow_url=' + encodeURIComponent(data.follow);
             }
             $window.open(
                 'https://www.xing.com/spi/shares/new?url=' + encodeURIComponent(data.url || $location.absUrl()) + followUrl
                 , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
         }

  , facebookShare = manageFacebookShare
  , twitterShare = manageTwitterShare
  , googlePlusShare = manageGooglePlusShare
  , redditShare = manageRedditShare
  , stumbleuponShare = manageStumbleuponShare
  , linkedinShare = manageLinkedinShare
  , pinterestShare = managePinterestShare
  , diggShare = manageDiggShare
  , tumblrShare = manageTumblrShare
  , vkShare = manageVkShare
  , deliciousShare = manageDeliciousShare
  , bufferShare = manageBufferShare
  , hackernewsShare = manageHackernewsShare
  , flipboardShare = manageFlipboardShare
  , pocketShare = managePocketShare
  , wordpressShare = manageWordpressShare
  , xingShare = manageXingShare;


  angular.module('720kb.socialshare', [])
         .provider(directiveName + 'Conf', socialshareConfigurationProvider)
         .directive(directiveName, socialshareDirective);
}(angular));
