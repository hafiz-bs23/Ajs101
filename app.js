(function (){
    'use strict'
    angular.module('angularApp', [])
    .controller('ctrl', cltrFunc)
    .filter('revr', myCustomFilterFactory)
    .filter('cntr',myCustomCounterFilterFactory);

    cltrFunc.$inject = ['$scope','revrFilter','cntrFilter'];

    function cltrFunc($scope, revrFilter){
        $scope.firstName = "";
        $scope.lastName = "";
    };
    function myCustomFilterFactory(){
        return function (input){
            input = input || "";
            var newString = "";
            for (let i = input.length - 1; i >= 0; i--) {
                newString += input[i];
            }
            return newString;
        };
    };
    function myCustomCounterFilterFactory(){
        return function(input, arg){
            input = input || "";
            var totalCount = 0;
            for (var i =0; i< input.length; i++){
                totalCount += input.charCodeAt(i);
            }
            return arg ==="do" ? totalCount: 0;
        }
    }
})();