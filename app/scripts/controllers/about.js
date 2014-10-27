'use strict';

/**
 * @ngdoc function
 * @name angularjsCleanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsCleanApp
 */
angular.module('angularjsCleanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
