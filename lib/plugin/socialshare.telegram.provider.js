/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareTelegram = function socialshareTelegram() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareTelegramService = function socialshareTelegramService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://telegram.me/share/url?url=' + encodeURIComponent(options.url || $location.absUrl());

      if (options.text) {
        urlString += '&text=' + encodeURIComponent(options.text);
      }

      $window.open(
        urlString
        , 'Telegram', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareTelegramService.defaults = defaults;
      return socialshareTelegramService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareTelegram', socialshareTelegram);
}(angular));
