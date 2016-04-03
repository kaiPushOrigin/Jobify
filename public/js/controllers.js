// var jobify = angular.module('jobify', ['ngRoute']);

myApp.controller('analysisController', ['$scope','$http', function ($scope, $http) {
    console.log('Hello, World from controller');
    $http.get('/analysis').success(function(response) {
        console.log(response);



        $scope.answer = response;
        $scope.answer.unshift("Prices");
        var chart = c3.generate({
            bindto: '#chart',
            data: {
              columns: [
                response,
                ['data2', 50, 20, 10, 40, 15, 25]
              ]
            }
        });




        $scope.changeData = function() {
            console.log("Change Data");
            setTimeout(function () {
                chart.load({
                    columns: [
                        ['data1', 130, 120, 150, 140, 160, 150],
                        ['data4', 30, 20, 50, 40, 60, 50],
                    ],
                    unload: ['data2', 'data3'],
                });
            }, 2000);
        };
    });


    // $scope.addPerson = function() {
    //     console.log($scope.person.name);
    //     $http.get('/contactList').success(function(response) {
    //         console.log("Success");
    //         $scope.answer = response;
    //         console.log($scope.answer[0].PRICE);
    //     });
    // };
}]);

// meanApp.controller('analysisController', ['$scope','$http', function ($scope, $http) {
//     // console.log('Hello, World from controller');
//
//     console.log("Hi");
// }]);

// myApp.controller('analysisController', function($scope) {
//   console.log("Test");
// });
