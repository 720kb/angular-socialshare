/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareTemplate = function socialshareTemplate() {

    var defaults = this.defaults = {

    }
    , socialshareTemplateService = function socialshareTemplateService($window, $location, config, element) {
      var options = angular.extend({}, defaults, config);

    };

    this.$get = function() {
      socialshareTemplateService.defaults = defaults;
      return socialshareTemplateService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareTemplate', socialshareTemplate);
}(angular));
