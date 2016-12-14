'use strict';

/**
 * @ngdoc directive
 * @name testProjectApp.directive:testproject
 * @description
 * # testproject
 */
angular.module('testProjectApp')
  .directive('todo', function () {
    return {
      templateUrl: 'views/todo.html',
      restrict: 'E',
      controller: 'TodoCtrl',
      controllerAs: 'ctrl',
      bindToController: true,
      scope:{
        todo:'=',
        onDelete:'&'
      }
    };
  });


