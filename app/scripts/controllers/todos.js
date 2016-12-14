'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:TodosCtrl
 * @description
 * # TodosCtrl
 * Controller of the testProjectApp
 */


var app = angular.module('myApp', ['ngLess']);
angular.module('testProjectApp')
  .constant('todoStates',{
    pending: 0,
    alreadyDone: 1
  })
  .controller('TodosCtrl', function ($resource,settings,todoStates) {
    var ctrl = this;
    ctrl.todoStates = todoStates;
    ctrl.todos = null;
    var todosResource = null;

    ctrl.newTodo = {
      text: '',
      toDate: null
    };

    todosResource = $resource(settings.apiUrl+'/todos/');
    ctrl.addTodo = function(){

      if(ctrl.newTodo.text != 0) {
        if(ctrl.newTodo.toDate == null){
          ctrl.newTodo.toDate = '10.10.2100';
        }
        todosResource.save({
          text: ctrl.newTodo.text,
          toDate: ctrl.newTodo.toDate
        }, function (todo) {
          clearNewTodo();
          ctrl.todos.push(todo);
        });
      }
    };

    ctrl.onDelete = function(deletedTodo){
      alert('deleted');
      var i = 0;
      ctrl.todos = ctrl.todos.filter(function(todo){
        alert(i++);
        return todo.id !== deletedTodo.id;
      });
      alert(ctrl.todos);
      ctrl.todos = null;
      getTodos();
    };

    ctrl.GetTodos = function(){
      todosResource.query(function(data){
        ctrl.todos = data;
        //alert(data[0]);
        //alert(ctrl.todos);
      });

    };
    var getTodos = ctrl.GetTodos;
    var clearNewTodo = function(){
      ctrl.newTodo = {
        text:'',
        toDate:null
      };
    };
    //console.log(todosResource);
    getTodos();

  });
