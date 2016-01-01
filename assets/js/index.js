/*global angular*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb', [
    'ngRoute',
    '720kb.socialshare'
  ])
  .config(['socialshareConfProvider', function configApp(socialshareConfProvider) {

    socialshareConfProvider.configure([{
      'provider': 'twitter',
      'conf': {
        'url': 'provider.com',
        'text': 'provider',
        'via': '',
        'hashtags': '',
        'trigger': 'click',
        'popupHeight': 300,
        'popupWidth' :400
      }
    }]);
  }]);
}(angular));
