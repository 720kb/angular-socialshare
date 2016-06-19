/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareXing = function socialshareXing() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'follow' : '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareXingService = function socialshareXingService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , followUrl = '';

      if (options.follow) {
        followUrl = '&follow_url=' + encodeURIComponent(options.follow);
      }
      $window.open(
        'https://www.xing.com/spi/shares/new?url=' + encodeURIComponent(options.url || $location.absUrl()) + followUrl
        , 'Xing', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareXingService.defaults = defaults;
      return socialshareXingService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareXing', socialshareXing);
}(angular));
