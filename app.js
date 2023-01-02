(function (){
    'use strict'
    var itemSet1 = [
        {
            name: "House",
            price: 100000
        },
        {
            name: "Car",
            price: 10000
        },
        {
            name: "Mobile Phone",
            price: 1000
        }
    ]
    var itemSet2 = [
        {
            name: "Paper",
            price: .50
        }
    ]
    angular.module('shoppingList', [])
    .controller('shoppingListController', shoppingListController);
    shoppingListController.$inject=['$scope']
    function shoppingListController($scope){
        $scope.traditionalList = itemSet1;
        $scope.monthlyList = itemSet2;
        $scope.adItemToMonthlyList = function(){
            var newItem = {
                name : $scope.itemName,
                price: $scope.itemPrice
            }
            $scope.monthlyList.push(newItem);
        };
    };
})();