/*global angular*/
/*eslint no-loop-func:0, func-names:0*/

(function withAngular(angular) {
  'use strict';

  var directiveName = 'socialshare'
    , serviceName = 'Socialshare'
    , socialshareFactory = /*@ngInject*/  ['$window', '$location', '$injector', '$log', function socialshareService($window, $location, $injector, $log) {

      var getProvider = function getProvider(provider) {
        var providerName = 'socialshare' + provider.charAt(0).toUpperCase() + provider.slice(1);

        if (!$injector.has(providerName)) {
          $log.warn('Invalid Provider Name : ' + provider);
        }

        return $injector.get(providerName);
      }
      , share = function share(provider, config, element) {
        getProvider(provider)($window, $location, config, element);
      }
      , defaults = function defaults(provider) {
        return getProvider(provider).defaults;
      };

      return {
        'share': share,
        'defaults': defaults
      };
    }]
    , socialshareDirective = /*@ngInject*/ ['Socialshare', function socialshareDirective(Socialshare) {

      var linkingFunction = function linkingFunction($scope, element, attrs) {
        var propertyRegex = /(?:[Ss]ocialshare)(.*)/
        , config = {}
        , trigger = attrs.shareTrigger || Socialshare.defaults(attrs.socialshareProvider).trigger
        , onEventTriggered = function onEventTriggered() {
          angular.forEach(Object.keys(attrs), function(key) {
          var property = propertyRegex.exec(key);
          if (property && property[1]) {
              property = property[1];
              property = property.charAt(0).toLowerCase() + property.slice(1);
              if (angular.isDefined(attrs[key])) {
                config[property] = attrs[key];
              }
          }
          });
          Socialshare.share(config.provider, config, element);
        };

        element.bind(trigger, onEventTriggered);
      };

      return {
        'restrict': 'A',
        'link': linkingFunction
      };
    }];


  angular.module('720kb.socialshare', [])
  .factory(serviceName, socialshareFactory)
  .directive(directiveName, socialshareDirective);
}(angular));
