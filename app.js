(function (){
    'use strict'
    angular.module('myFirstApp', [])
    .controller('watcherController', function($scope){
        $scope.initValue = 0;
        $scope.showOne = function(){
            $scope.initValue = 1;
            console.log("Number of watchers: ",$scope.$$watchersCount);
        };
        $scope.increaseOne = function(){
            $scope.initValue++;
            console.log("Number of watchers: ",$scope.$$watchersCount);
        };

        // Manually Set watchers
        $scope.$watch('showOne', function(newValue, oldValue){
            console.log("New Value: ", newValue, " Old Value", oldValue);
        });

        $scope.$watch('increaseOne', function(newValue, oldValue){
            console.log("New Value: ", newValue, " Old Value", oldValue);
        });
    });

})();