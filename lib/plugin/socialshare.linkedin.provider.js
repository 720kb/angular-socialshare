/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareLinkedin = function socialshareLinkedin() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'description': '',
      'source': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareLinkedinService = function socialshareLinkedinService($window, $location, config) {
      /*
       * Refer: https://developer.linkedin.com/docs/share-on-linkedin
       * Tab: Customized URL
       */
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://www.linkedin.com/shareArticle?mini=true';

      urlString += '&url=' + encodeURIComponent(options.url || $location.absUrl());

      if (options.text) {
        urlString += '&title=' + encodeURIComponent(options.text);
      }

      if (options.description) {
        urlString += '&summary=' + encodeURIComponent(options.description);
      }

      if (options.source) {
        urlString += '&source=' + encodeURIComponent(options.source);
      }

      $window.open(
        urlString,
        'Linkedin', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareLinkedinService.defaults = defaults;
      return socialshareLinkedinService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareLinkedin', socialshareLinkedin);
}(angular));
