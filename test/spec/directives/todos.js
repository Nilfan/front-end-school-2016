'use strict';

describe('Directive: todos', function () {

  // load the directive's module
  beforeEach(module('testProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<todos></todos>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the todos directive');
  }));
});
