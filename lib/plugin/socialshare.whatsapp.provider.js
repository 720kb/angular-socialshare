/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareWhatsapp = function socialshareWhatsapp() {

    var defaults = this.defaults = {
      'url': '',
      'text': ''
    }
    , socialshareWhatsappService = function socialshareWhatsappService($window, $location, config, element) {
      var options = angular.extend({}, defaults, config)
      , href = 'whatsapp://send?text=' + encodeURIComponent(options.text + ' ') + encodeURIComponent(options.url || $location.absUrl());

      // whatsapp can't share without an element clicked (href)
      element.attr('href', href);
    };

    this.$get = function() {
      socialshareWhatsappService.defaults = defaults;
      return socialshareWhatsappService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareWhatsapp', socialshareWhatsapp);
}(angular));
