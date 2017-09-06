"use strict";

const app = angular.module('routeApp', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
        .when('/a', {
            templateUrl: 'partials/famousHighway1.html',
            controller: 'highwayOneCtrl'
        })
        .when('/b', {
            templateUrl: 'partials/famousHighway2.html',
            controller: 'highwayTwoCtr2'
        })
        .when('/',{
            templateUrl: 'partials/home.html'
        })
        .otherwise('/');
});