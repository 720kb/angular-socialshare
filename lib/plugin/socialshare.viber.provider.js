/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareViber = function socialshareViber() {

    var defaults = this.defaults = {
      'url': '',
      'text': ''
    }
    , socialshareViberService = function socialshareViberService($window, $location, config, element) {
      var options = angular.extend({}, defaults, config)
      , href = 'viber://forward?text=' + encodeURIComponent(options.text + ' ') + encodeURIComponent(options.url || $location.absUrl());

      // viber can't share without an element clicked (href)
      element.attr('href', href);
    };

    this.$get = function() {
      socialshareViberService.defaults = defaults;
      return socialshareViberService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareViber', socialshareViber);
}(angular));
