(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.itemsList = "";
    $scope.listOfDishes = [];
    $scope.lunchAdvise = "";


    $scope.verifyFoodList = function (){
      console.log($scope.itemsList);
      console.log($scope.itemsList.trim());
      if ($scope.itemsList.trim() == "") {
        $scope.lunchAdvise =  "Please enter data first";
        return;
      }

      $scope.listOfDishes = $scope.itemsList.split(' ');
      var numberOfDishes = $scope.listOfDishes.length;
      console.log($scope.listOfDishes.length);

      if (numberOfDishes <= 3) {
        $scope.lunchAdvise =  "Enjoy!";
        return;
      }

      $scope.lunchAdvise =  "Too much!";
    };
  }

})();
