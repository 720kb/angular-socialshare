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
        'url': 'http://720kb.net',
        'text': '720kb is enough',
        'via': 'npm',
        'hashtags': 'angularjs,socialshare,angular-socialshare',
        'trigger': 'click',
        'popupHeight': 800,
        'popupWidth' : 400
      }
    }]);
  }])
  .controller('TestController', ['$scope', '$timeout', 'Socialshare', function testController($scope, $timeout, Socialshare) {
    var that = this;
    //Call service to trigger immediately the sharing method
    /*Socialshare.share({
      'provider': 'twitter',
      'attrs': {
        'socialshareUrl': 'http://720kb.net',
        'socialshareHashtags': '720kb,angular, socialshare'
      }
    });*/
    $timeout(function scopeValueTimeout() {

      that.testValue = '720kb';
    }, 3000);
  }]);
}(angular));
