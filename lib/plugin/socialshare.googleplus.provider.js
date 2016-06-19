/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareGooglePlus = function socialshareGooglePlus() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareGooglePlusService = function socialshareGooglePlusService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://plus.google.com/share?url=' + encodeURIComponent(options.url || $location.absUrl())
        , 'Google+', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareGooglePlusService.defaults = defaults;
      return socialshareGooglePlusService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareGoogle+', socialshareGooglePlus);
}(angular));
