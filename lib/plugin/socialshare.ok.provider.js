/*global angular*/
(function withAngular(angular) {
  'use strict';

  var socialshareOk = function socialshareOk() {

    var defaults = this.defaults = {
      'url': '',
      'text': '',
      'trigger': 'click',
      'popupHeight': 600,
      'popupWidth': 500
    }
    , socialshareOkService = function socialshareOkService($window, $location, config) {
      var options = angular.extend({}, defaults, config);

      $window.open(
        'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=' + encodeURIComponent(options.url || $location.absUrl()) + '&st.comments=' + encodeURIComponent(options.text)
        , 'Ok', 'toolbar=0,status=0,resizable=yes,width=' + options.popupWidth + ',height=' + options.popupHeight
        + ',top=' + ($window.innerHeight - options.popupHeight) / 2 + ',left=' + ($window.innerWidth - options.popupWidth) / 2);
    };

    this.$get = function() {
      socialshareOkService.defaults = defaults;
      return socialshareOkService;
    };

  };

  angular.module('720kb.socialshare')
  .provider('socialshareOk', socialshareOk);
}(angular));
