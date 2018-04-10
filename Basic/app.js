// we craete app module
var app = angular.module('demoApp', []);

// service is used to write business logics
app.service('DataService', function(){

    this.getEmployee = function(){
        return [
            {
                id: 1,
                name : 'Arti'
            },
            {
                id: 2,
                name : 'Ramesh'
            }
        ];
    }

    this.getTitles = function(){
        return ['1-Arti', '2-Arti', '3-Arti', '4-Arti'];
    }
});


app.directive('myTag', function () {
    return {
        restrict: 'EA', // E - element , A - attribute
        templateUrl: 'sample.html'
    };
});

// we add controller to app module
app.controller('MainController', function MainController($scope, DataService) {

    // setting title example of oneway binding
    // $scope act as glue to bind variable with view
    $scope.title = 'sample title';

    $scope.titles = DataService.getTitles();

    $scope.btnClicked = function () {

        alert('sdfsdfs');
    }

    console.log(DataService.getEmployee());

});

