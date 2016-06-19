/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareHackernews = function socialshareHackernews() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareHackernewsService = function socialshareHackernewsService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://news.ycombinator.com/submitlink?';

      if (options.text) {
        urlString += 't=' + encodeURIComponent(options.text) + '&';
      }
      //default to the current page if a URL isn't specified
      urlString += 'u=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'Hackernews', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareHackernewsService.defaults = defaults;
      return socialshareHackernewsService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareHackernews', socialshareHackernews);
}(angular));
