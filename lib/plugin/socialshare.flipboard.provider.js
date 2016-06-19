/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareFlipboard = function socialshareFlipboard() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareFlipboardService = function socialshareFlipboardService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://share.flipboard.com/bookmarklet/popout?v=2&';

      if (options.text) {
        urlString += 'title=' + encodeURIComponent(options.text) + '&';
      }

      //default to the current page if a URL isn't specified
      urlString += 'url=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'Flipboard', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareFlipboardService.defaults = defaults;
      return socialshareFlipboardService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareFlipboard', socialshareFlipboard);
}(angular));
