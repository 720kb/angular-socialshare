/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareTemplate = function socialshareTemplate() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'via': '',
      'hashtags': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareTemplateService = function socialshareTemplateService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString = 'https://www.twitter.com/intent/tweet?';

      if (options.text) {
        urlString += 'text=' + encodeURIComponent(options.text);
      }

      if (options.via) {
        urlString += '&via=' + encodeURIComponent(options.via);
      }

      if (options.hashtags) {
        urlString += '&hashtags=' + encodeURIComponent(options.hashtags);
      }

      //default to the current page if a URL isn't specified
      urlString += '&url=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'Twitter', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareTemplateService.defaults = defaults;
      return socialshareTemplateService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareTemplate', socialshareTemplate);
}(angular));

/*global angular*/
(function withAngular(angular) {
  'use strict';

  angular.module('720kb.socialshare')
    .provider('shareTwitter', shareTwitter);

  function shareTwitter() {

    var defaults = this.defaults = {
      url: '',
      text: '',
      via: '',
      hashtags: '',
      trigger: 'click',
      popupHeight: 300,
      popupWidth: 400
    };

    this.$get = function() {
      shareTwitterService.defaults = defaults;
      return shareTwitterService;
    };

    function shareTwitterService($window, $location, config) {
      var options = angular.extend({}, defaults, config);
      var urlString = 'https://www.twitter.com/intent/tweet?';

      if (options.text) {
        urlString += 'text=' + encodeURIComponent(options.text);
      }

      if (options.via) {
        urlString += '&via=' + encodeURI(options.via);
      }

      if (options.hashtags) {
        urlString += '&hashtags=' + encodeURI(options.hashtags);
      }

      //default to the current page if a URL isn't specified
      urlString += '&url=' + encodeURIComponent(options.url || $location.absUrl());

      $window.open(
        urlString,
        'sharer', 'toolbar=0,status=0,width=' + options.popupWidth + ',height=' + options.popupHeight +
        ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    }

  }
}(angular));
