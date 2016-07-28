'use strict';

/**
 * @ngdoc function
 * @name pdxflightsApp.controller:FlightsCtrl
 * @description
 * # FlightsCtrl
 * Controller of the pdxflightsApp
 */
angular.module('pdxflightsApp')
  .controller('FlightsCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.flights = [{"name": "pdx"}]
  }]);
