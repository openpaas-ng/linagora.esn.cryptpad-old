(function() {
  'use strict';

  angular.module('linagora.esn.cryptpad')
  .config(function($stateProvider, routeResolver) {
    $stateProvider
      .state('cryptpad', {
        url: '/cryptpad',
        templateUrl: '/cryptpad/cryptpad/pad/index.html',
        controller: 'CryptpadController'
      })
      .state('editCryptpad', {
        url: '/cryptpad/:version/:form/:channel/:doc',
        templateUrl: '/cryptpad/cryptpad/pad/index.html',
        controller: 'CryptpadController'
      })
      .state('padList', {
        url: '/cryptpad/index',
        templateUrl: '/cryptpad/app/index.html',
        controller: 'IndexController'
      });
  });
})();
