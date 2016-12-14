'use strict';

/**
 * @ngdoc overview
 * @name testProjectApp
 * @description
 * # testProjectApp
 *
 * Main module of the application.
 */
angular
  .module('testProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
