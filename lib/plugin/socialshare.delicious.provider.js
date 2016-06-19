/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareDelicious = function socialshareDelicious() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareDeliciousService = function socialshareDeliciousService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.delicious.com/save?v=5&noui&jump=close&url=' + encodeURIComponent(options.url || $location.absUrl()) + '&title=' + encodeURIComponent(options.text)
        , 'Delicious', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareDeliciousService.defaults = defaults;
      return socialshareDeliciousService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareDelicious', socialshareDelicious);
}(angular));
