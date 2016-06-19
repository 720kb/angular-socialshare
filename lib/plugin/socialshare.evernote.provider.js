/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareEvernote = function socialshareEvernote() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareEvernoteService = function socialshareEvernoteService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'http://www.evernote.com/clip.action?url=' + encodeURIComponent(options.url || $location.absUrl());

      if (options.text) {
        urlString += '&title=' + encodeURIComponent(options.text);
      }

      $window.open(
        urlString
        , 'Evernote', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareEvernoteService.defaults = defaults;
      return socialshareEvernoteService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareEvernote', socialshareEvernote);
}(angular));
