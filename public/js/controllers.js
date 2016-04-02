var meanApp = angular.module('meanApp', []);
meanApp.controller('AppCtrl', ['$scope','$http', function ($scope, $http) {
    // console.log('Hello, World from controller');

    $scope.addPerson = function() {
        console.log($scope.person.name);
        $http.get('/contactList').success(function(response) {
            console.log("Success");
            $scope.answer = response;
            console.log($scope.answer[0].PRICE);
        });
    };

}]);
