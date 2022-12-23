(function (){
    'use strict'
    angular.module('myFirstApp', [])
    .controller('myFirstController', function($scope){
        $scope.name = "Ulala"
        $scope.grettings = function(){
            return "Hy look like you are in the right place. We may have fun!! Lets' Go.!!"
        };
    });

})();