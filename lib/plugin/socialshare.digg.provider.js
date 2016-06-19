/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareDigg = function socialshareDigg() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareDiggService = function socialshareDiggService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.digg.com/submit?url=' + encodeURIComponent(options.url || $location.absUrl()) + '&title=' + encodeURIComponent(options.text)
        , 'Digg', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareDiggService.defaults = defaults;
      return socialshareDiggService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareDigg', socialshareDigg);
}(angular));
