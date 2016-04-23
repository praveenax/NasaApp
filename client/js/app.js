var myApp = angular.module('spacesim', ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'homeContrl'
        })
        .when('/match', {
            templateUrl: 'html/match.html',
            controller: 'matchContrl'
        });

    //wbd
});