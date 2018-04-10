// we craete app module
var app = angular.module('demoApp', []);

// we add controller to app module
app.controller('MainController', function MainController($scope) {

    // setting title example of oneway binding
    // $scope act as glue to bind variable with view
    $scope.title = 'sample title';

    $scope.titles = ['1-Arti', '2-Arti', '3-Arti', '4-Arti'];

    $scope.btnClicked = function () {

        alert('sdfsdfs');
    }

});

app.directive('myTag', function () {
    return {
        restrict: 'EA', // E - element , A - attribute
        templateUrl: 'sample.html'
    };
});