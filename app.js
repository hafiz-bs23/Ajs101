(function (){
    'use strict'
    angular.module('nameCalculator', [])
    .controller('nameCalculatorController', function($scope){
        $scope.name = "Your Name"
        $scope.sumNumName = 0;
        $scope.grettings = function(){
            return "Write down your name here. We are very good at Calculating it."
        };
        $scope.calculateName = function(){
            var totaoValue = 0;
            totaoValue = calculateNumaricOfString($scope.name);
            $scope.sumNumName = totaoValue;
        };
        function calculateNumaricOfString(string){
            var totalStringValue = 0;
            for (var i=0; i<string.length; i++){
                totalStringValue = totalStringValue + string.charCodeAt(i);
            }
            return totalStringValue;
        }
    });
})();