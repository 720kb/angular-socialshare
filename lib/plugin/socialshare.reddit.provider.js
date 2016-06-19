/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareReddit = function socialshareReddit() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'subreddit': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareRedditService = function socialshareRedditService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://www.reddit.com/';

      if (options.subreddit) {
        urlString += 'r/' + options.subreddit + '/submit?url=';
      } else {
        urlString += 'submit?url=';
      }
      /*-
       * Reddit isn't responsive and at default width for our popups (500 x 500), everything is messed up.
       * So, overriding the width if it is less than 900 (played around to settle on this) and height if
       * it is less than 650px.
       */
      if (options.popupWidth < 900) {
        options.popupWidth = 900;
      }

      if (options.popupHeight < 650) {
        options.popupHeight = 650;
      }

      $window.open(
        urlString + encodeURIComponent(options.url || $location.absUrl()) + '&title=' + encodeURIComponent(options.text)
        , 'Reddit', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareRedditService.defaults = defaults;
      return socialshareRedditService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareReddit', socialshareReddit);
}(angular));
