'use strict';

/**
 * @ngdoc function
 * @name angularjsCleanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsCleanApp
 */
angular.module('angularjsCleanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
