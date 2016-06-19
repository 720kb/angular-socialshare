/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareSkype = function socialshareSkype() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareSkypeService = function socialshareSkypeService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://web.skype.com/share?source=button&url=' + encodeURIComponent(options.url || $location.absUrl());

      if (options.text) {
        urlString += '&text=' + encodeURIComponent(options.text);
      }

      $window.open(
        urlString
        , 'Skype', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareSkypeService.defaults = defaults;
      return socialshareSkypeService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareSkype', socialshareSkype);
}(angular));
