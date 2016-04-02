"use strict";

// var myApp =  angular.module("myApp", [
//     "ngRoute"]).
//     config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
//         $routeProviasder.
//         when("/pageOne", {
//             templateUrl: "templates/pageOne.html",
//             controller: "pageOneController"
//         }).
//         when("/pageTwo", {
//             templateUrl: "templates/pageTwo.html",
//             controller: "pageTwoController"
//         }).
//         otherwise({
//             redirectTo: "/index.html"
//         });
//         $locationProvider.html5Mode({enabled: true, requireBase: false});
//     }
// ]);

var myApp = angular.module('myApp', [
	'ngRoute']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/pageOne', {templateUrl: 'templates/pageOne.html'});
		$routeProvider.when('/pageTwo', {templateUrl: 'templates/pageTwo.html'});
		$routeProvider.otherwise({redirectTo: '/index.html'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});

	}]);
