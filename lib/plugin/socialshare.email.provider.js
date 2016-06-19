/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareEmail = function socialshareEmail() {

    var defaults = this.defaults = {
      'subject': '',
      'body': '',
      'to': '',
      'cc': '',
      'bcc': '',
      'trigger': 'click'
    }
    , socialshareEmailService = function socialshareEmailService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'mailto:';

      if (options.to) {
        urlString += encodeURIComponent(options.to);
      }

      urlString += '?';

      if (options.body) {
        urlString += 'body=' + options.body;
      }

      if (options.subject) {
        urlString += '&subject=' + encodeURIComponent(options.subject);
      }

      if (options.cc) {
        urlString += '&cc=' + encodeURIComponent(options.cc);
      }

      if (options.bcc) {
        urlString += '&bcc=' + encodeURIComponent(options.bcc);
      }

      $window.open(urlString, '_self');
    };

    this.$get = function() {
      socialshareEmailService.defaults = defaults;
      return socialshareEmailService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareEmail', socialshareEmail);
}(angular));
