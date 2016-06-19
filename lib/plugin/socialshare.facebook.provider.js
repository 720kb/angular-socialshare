/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareFacebook = function socialshareFacebook() {

    var defaults = this.defaults = {
      'url':'',
      'text': '',
      'media': '',
      'type': '',
      'via': '',
      'to': '',
      'from': '',
      'ref': '',
      'display': '',
      'source': '',
      'caption': '',
      'redirectUri': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareFacebookService = function socialshareFacebookService($window, $location, config) {
      var options = angular.extend({}, defaults, config)
      , urlString;

      if (options.type && options.type === 'feed') {
        // if user specifies that they want to use the Facebook feed dialog (https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.4)
        urlString = 'https://www.facebook.com/dialog/feed?';

        if (options.via) {
          urlString += '&app_id=' + encodeURIComponent(options.via);
        }

        if (options.redirectUri) {
          urlString += '&redirect_uri=' + encodeURIComponent(options.redirectUri);
        }
        if (options.url) {
          urlString += '&link=' + encodeURIComponent(options.url);
        }

        if (options.to) {
          urlString += '&to=' + encodeURIComponent(options.to);
        }

        if (options.display) {
          urlString += '&display=' + encodeURIComponent(options.display);
        }

        if (options.ref) {
          urlString += '&ref=' + encodeURIComponent(options.ref);
        }

        if (options.from) {
          urlString += '&from=' + encodeURIComponent(options.from);
        }

        if (options.description) {
          urlString += '&description=' + encodeURIComponent(options.description);
        }

        if (options.text) {
          urlString += '&name=' + encodeURIComponent(options.text);
        }

        if (options.caption) {
          urlString += '&caption=' + encodeURIComponent(options.caption);
        }

        if (options.media) {
          urlString += '&picture=' + encodeURIComponent(options.media);
        }

        if (options.source) {
          urlString += '&source=' + encodeURIComponent(options.source);
        }

        $window.open(
          urlString,
          'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
          + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);

      } else if (options.type && options.type === 'send') {
        // if user specifies that they want to use the Facebook send dialog (https://developers.facebook.com/docs/sharing/reference/send-dialog)
        urlString = 'https://www.facebook.com/dialog/send?';

        if (options.via) {
          urlString += '&app_id=' + encodeURIComponent(options.via);
        }

        if (options.redirectUri) {
          urlString += '&redirect_uri=' + encodeURIComponent(options.redirectUri);
        }

        if (options.url) {
          urlString += '&link=' + encodeURIComponent(options.url);
        }

        if (options.to) {
          urlString += '&to=' + encodeURIComponent(options.to);
        }

        if (options.display) {
          urlString += '&display=' + encodeURIComponent(options.display);
        }

        if (options.ref) {
          urlString += '&ref=' + encodeURIComponent(options.ref);
        }

        $window.open(
          urlString,
          'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
          + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);

      } else {
        //otherwise default to using sharer.php
        $window.open(
          'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(options.url || $location.absUrl())
          , 'Facebook', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
          + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
      }
    };

    this.$get = function() {
      return socialshareFacebookService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareFacebook', socialshareFacebook);
}(angular));
