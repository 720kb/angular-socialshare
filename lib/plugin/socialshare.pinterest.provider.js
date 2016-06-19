/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialsharePinterest = function socialsharePinterest() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'media': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialsharePinterestService = function socialsharePinterestService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(options.url || $location.absUrl()) + '&media=' + encodeURIComponent(options.media) + '&description=' + encodeURIComponent(options.text)
        , 'Pinterest', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialsharePinterestService.defaults = defaults;
      return socialsharePinterestService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialsharePinterest', socialsharePinterest);
}(angular));
