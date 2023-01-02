(function (){
    'use strict'
    angular.module('timer', [])
    .controller('TimerController', TimerController);

    TimerController.$inject = ['$scope','$timeout']
    function TimerController($scope, $timeout){
        $scope.seccounter = 0;
        $timeout(function(){
            $scope.seccounter++;
        },1000)
    };
})();