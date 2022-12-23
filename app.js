(function (){
    'use strict'
    angular.module('DependencyInjectionApp', [])
    .controller('DependencyInjectionAppController', DIController);
    DIController.$inject = ['$scope','$filter']
    function DIController($scope,$filter){
        $scope.name = "";
        $scope.upperName = "";
        $scope.upper = function(){
            var uPcase = $filter('uppercase');
            $scope.upperName = uPcase($scope.name);
        };
    };
})();