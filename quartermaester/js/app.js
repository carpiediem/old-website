var app = angular.module("quartermaester", []);

app.controller("characters", function($scope,$http) {
   $http.get("character-data.js")
        .success(function(response) {$scope.people = response;});
});