/**
 * Created by Jason on 10/29/2016.
 */
var app = angular.module('jasonPortfolio', []);

app.controller('MainCtrl', [$scope, function($scope){
    $scope.test = 'Hello Portfolio!';
}]);