// we craete app module
var app = angular.module('todoApp', ['ngRoute']); //ngRoute service inject

app.config(function ($routeProvider, $locationProvider) {
    // routing is configured
    
    $routeProvider.
        when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        }).
        otherwise('/home');

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});

app.run(function(){

});

