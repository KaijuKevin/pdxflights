'use strict';

describe('Controller: FlightsCtrl', function () {

  // load the controller's module
  beforeEach(module('pdxflightsApp'));

  var FlightsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlightsCtrl = $controller('FlightsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FlightsCtrl.awesomeThings.length).toBe(3);
  });
});
