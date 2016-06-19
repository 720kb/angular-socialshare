/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialsharePocket = function socialsharePocket() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialsharePocketService = function socialsharePocketService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://getpocket.com/save?';

      if (options.text) {
        urlString += 'text=' + encodeURIComponent(options.text) + '&';
      }

      //default to the current page if a URL isn't specified
      urlString += 'url=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'Pocket', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialsharePocketService.defaults = defaults;
      return socialsharePocketService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialsharePocket', socialsharePocket);
}(angular));
