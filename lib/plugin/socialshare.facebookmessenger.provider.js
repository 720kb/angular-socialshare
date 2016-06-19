/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareFacebookMessenger = function socialshareFacebookMessenger() {

    var defaults = this.defaults = {
      'url': ''
    }
    , socialshareFacebookMessengerService = function socialshareFacebookMessengerService($window, $location, config, element) {
      var options = angular.extend({}, defaults, config)
      , href = 'fb-messenger://share?link=' + encodeURIComponent(options.url || $location.absUrl());

      // Fb Messenger can't open without an element clicked (href)
      element.attr('href', href);
    };

    this.$get = function() {
      socialshareFacebookMessengerService.defaults = defaults;
      return socialshareFacebookMessengerService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareFacebook-messenger', socialshareFacebookMessenger);
}(angular));
