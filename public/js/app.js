"use strict";

// var myApp =  angular.module("myApp", [
//     "ngRoute"]).
//     config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
//         $routeProvider.
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
	config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
		when('/analysis', {
			templateUrl: 'templates/analysis.html',
			controller: 'analysisController'
		}).
		when('/pageTwo', {
			templateUrl: 'templates/pageTwo.html'
		}).
		when('/home', {
			templateUrl: 'templates/home.html'
		}).
		otherwise({
			redirectTo: '/home'
		});

		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}]);

// myApp.controller('first', function($scope) {
//   console.log("Test");
// });
