'use strict';

/**
 * @ngdoc service
 * @name testProjectApp.settings
 * @description
 * # settings
 * Service in the testProjectApp.
 */
angular.module('testProjectApp')
  .constant('settings', {
    //apiUrl: 'http://13.69.245.45:3000/api'
    apiUrl: 'http://localhost:3000/api'
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
