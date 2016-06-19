/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareBuffer = function socialshareBuffer() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'via': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareBufferService = function socialshareBufferService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://bufferapp.com/add?';

      if (options.text) {
        urlString += 'text=' + encodeURIComponent(options.text);
      }

      if (options.via) {
        urlString += '&via=' + encodeURIComponent(options.via);
      }

      //default to the current page if a URL isn't specified
      urlString += '&url=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'Buffer', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareBufferService.defaults = defaults;
      return socialshareBufferService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareBuffer', socialshareBuffer);
}(angular));
