/*global angular*/

(function withAngular(angular) {
  'use strict';

  angular.module('720kb', [
    'ngRoute',
    '720kb.socialshare'
  ])
  .config(['socialshareConfProvider', function configApp(socialshareConfProvider) {

    socialshareConfProvider.configure([{
      'provider': 'stumbleupon',
      'conf': {
        'url': 'provider.com',
        'text': 'provider',
        'via': '@npm',
        'hashtags': '',
        'trigger': 'click',
        'popupHeight': 800,
        'popupWidth' : 400
      }
    }]);
  }])
  .controller('TestController', ['$scope', '$timeout', function testController($scope, $timeout) {
    var that = this;
    $timeout(function scopeValueTimeout() {

      that.testValue = '720kb';
    }, 3000);
  }]);
}(angular));
