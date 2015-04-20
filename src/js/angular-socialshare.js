/*global angular*/
/*eslint no-loop-func:0, func-names:0*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb.socialshare', [])
  .directive('socialshare', ['$window', '$location', function manageDirective ($window, $location) {

    return {
      'restrict': 'A',
      'link': function linkingFunction ($scope, element, attr) {

        var key,
          attributeName,
          properties = {},
          propDefaults = {
          'url': '',
          'provider': '',
          'text': '',
          'media': '',
          'hashtags': '',
          'via': '',
          'popupHeight': 500,
          'popupWidth': 500
        };

        // Observe the values in each of the properties so that if they're updated elsewhere,
        // they are updated in this directive.
        for (key in propDefaults) {
          if (propDefaults.hasOwnProperty(key)) {
            attributeName = 'socialshare' + key.substring(0, 1).toUpperCase() + key.substring(1);
            if (attr[attributeName]) {
              (function (keyName) {
                attr.$observe(attributeName, function (value) {
                  properties[keyName] = value;
                });
              }(key));
            } else {
              // Use the default
              properties[key] = propDefaults[key];
            }
          }
        }

        properties.eventTrigger = attr.socialshareTrigger || 'click';

        $scope.facebookShare = function manageFacebookShare (data) {

          $window.open(
            '//www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(data.url)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.twitterShare = function manageTwitterShare (data) {
          var urlString = '//www.twitter.com/intent/tweet?';

          if (data.text) {
            urlString += 'text=' + encodeURIComponent(data.text);
          }

          if (data.via) {
            urlString += '&via=' + encodeURI(data.via);
          }

          if (data.hashtags) {
            urlString += '&hashtags=' + encodeURI(data.hashtags);
          }

          // Default to the current page if a URL isn't specified
          urlString += '&url=' + encodeURIComponent(data.url || $location.absUrl());

          $window.open(
            urlString,
            'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight
          );

        };

        $scope.googlePlusShare = function manageGooglePlusShare (data) {

          $window.open(
            '//plus.google.com/share?url=' + encodeURIComponent(data.url)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.redditShare = function manageRedditShare (data) {

          $window.open(
            '//www.reddit.com/submit?url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.stumbleuponShare = function manageStumbleuponShare (data) {

          $window.open(
            '//www.stumbleupon.com/submit?url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.linkedinShare = function manageLinkedinShare (data) {

          $window.open(
            '//www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.pinterestShare = function managePinterestShare (data) {

          $window.open(
            '//www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(data.url) + '&media=' + encodeURI(data.media) + '&description=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.diggShare = function manageDiggShare (data) {

          $window.open(
            '//www.digg.com/submit?url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.tumblrShare = function manageTumblrShare (data) {
          //tumblr doesnt likes http:// or https:// actually its a mistery
          $window.open(
            '//www.tumblr.com/share/link?url=' + encodeURIComponent(data.url.replace('http://', '').replace('https://')) + '&description=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.vkShare = function manageVkShare (data) {

         $window.open(
            '//www.vk.com/share.php?url=' + encodeURIComponent(data.url)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        $scope.deliciousShare = function manageDeliciousShare (data) {

          $window.open(
            '//www.delicious.com/save?v=5&noui&jump=close&url=' + encodeURIComponent(data.url) + '&title=' + encodeURI(data.text)
            , 'sharer', 'toolbar=0,status=0,width=' + data.popupWidth + ',height=' + data.popupHeight);
        };

        element.bind(properties.eventTrigger, function onEventTriggered() {

          switch (properties.provider) {
            case 'facebook':

              $scope.facebookShare(properties);
              break;

            case 'google+':

              $scope.googlePlusShare(properties);
              break;

            case 'twitter':

              $scope.twitterShare(properties);
              break;

            case 'stumbleupon':

              $scope.stumbleuponShare(properties);
              break;

            case 'reddit':

              $scope.redditShare(properties);
              break;

            case 'pinterest':

              $scope.pinterestShare(properties);
              break;

            case 'linkedin':

              $scope.linkedinShare(properties);
              break;

            case 'digg':

              $scope.diggShare(properties);
              break;

            case 'tumblr':

              $scope.tumblrShare(properties);
              break;

            case 'delicious':

              $scope.deliciousShare(properties);
              break;

            case 'vk':

              $scope.vkShare(properties);
              break;

            default: return;
          }
        });
      }
    };
  }]);
}(angular));
