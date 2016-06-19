/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareTumblr = function socialshareTumblr() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareTumblrService = function socialshareTumblrService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      if (options.media) {
        var urlString = 'https://www.tumblr.com/share/photo?source=' + encodeURIComponent(options.media);

        if (options.text) {
          urlString += '&caption=' + encodeURIComponent(options.text);
        }

        $window.open(
          urlString,
          'Tumblr', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
          + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
      } else {

        $window.open(
          'https://www.tumblr.com/share/link?url=' + encodeURIComponent(options.url || $location.absUrl()) + '&description=' + encodeURIComponent(options.text)
          , 'Tumblr', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
          + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
      }
    };

    this.$get = function() {
      socialshareTumblrService.defaults = defaults;
      return socialshareTumblrService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareTumblr', socialshareTumblr);
}(angular));
