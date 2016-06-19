/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareWordpress = function socialshareWordpress() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareWordpressService = function socialshareWordpressService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'http://wordpress.com/press-this.php?';

      if (options.text) {
        urlString += 't=' + encodeURIComponent(options.text) + '&';
      }
      if (options.media) {
        urlString += 'i=' + encodeURIComponent(options.media) + '&';
      }

      //default to the current page if a URL isn't specified
      urlString += 'u=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'Wordpress', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareWordpressService.defaults = defaults;
      return socialshareWordpressService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareWordpress', socialshareWordpress);
}(angular));
