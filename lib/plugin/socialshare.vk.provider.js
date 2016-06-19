/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareVk = function socialshareVk() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareVkService = function socialshareVkService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://www.vk.com/share.php?url=' + encodeURIComponent(options.url || $location.absUrl());

      if (options.text) {
        urlString += '&title=' + encodeURIComponent(options.text);
      }

      if (options.media) {
        urlString += '&image=' + encodeURIComponent(options.media);
      }

      if (options.description) {
        urlString += '&description=' + encodeURIComponent(options.description);
      }

      $window.open(
        urlString
        , 'Vk', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareVkService.defaults = defaults;
      return socialshareVkService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareVk', socialshareVk);
}(angular));
