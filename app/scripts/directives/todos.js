'use strict';

/**
 * @ngdoc directive
 * @name testProjectApp.directive:todos
 * @description
 * # todos
 */
angular.module('testProjectApp')
  .directive('todos', function () {
    return {
      templateUrl: 'views/todos.html',
      restrict: 'EA',
      controller: 'TodosCtrl',
      controllerAs: 'ctrl'

    };
  });
