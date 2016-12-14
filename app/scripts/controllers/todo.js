'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
  .controller('TodoCtrl', function (settings, todoStates,$resource) {
    var ctrl = this;
    ctrl.todoStates = todoStates;
    var todoResource = null;

    ctrl.newTodo = {
      text: '',
      toDate: null
    };

    todoResource = $resource(settings.apiUrl+'/todos/:todoId', {todoId: '@todoId'}, {
      update: {method: 'PUT'}, delete: {method: 'DELETE'}
    });

    ctrl.done = function() {
      ctrl.todo.state = todoStates.alreadyDone;
      todoResource.update({todoId: ctrl.todo.id});
    };

    ctrl.delete = function () {
      var td = todoResource.delete({todoId: ctrl.todo.id});
      //alert('delete');
      /*todoResource.delete({}, ctrl.todotodoId);*/
      console.log(td);
      ctrl.onDelete(td);
    };

  });
