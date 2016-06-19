/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareStumbleupon = function socialshareStumbleupon() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareStumbleuponService = function socialshareStumbleuponService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.stumbleupon.com/submit?url=' + encodeURIComponent(options.url || $location.absUrl()) + '&title=' + encodeURIComponent(options.text)
        , 'StumbleUpon', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareStumbleuponService.defaults = defaults;
      return socialshareStumbleuponService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareStumbleupon', socialshareStumbleupon);
}(angular));
