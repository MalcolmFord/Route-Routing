"use strict";

const app = angular.module('routeApp', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
        .when('/a', {
            templateUrl: 'partials/famousHighway1.html',
            controller: 'highwayOneCtrl'
        })
        .when('/', {
            templateUrl: 'partials/famousHighway2.html',
            controller: 'highwayTwoCtr2'
        })
        .otherwise('/');
});