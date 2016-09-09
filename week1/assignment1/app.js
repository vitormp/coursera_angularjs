(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.itemsList = "";
    $scope.lunchAdvise = "";


    $scope.verifyFoodList = function (){
      $scope.lunchAdvise =  "Too much!";

      var listOfDishes = $scope.itemsList.split(' ');
      var numberOfDishes = listOfDishes.length;

      if (numberOfDishes <= 3) {
        $scope.lunchAdvise =  "Enjoy!";
      }

      if ($scope.itemsList.trim() == "") {
        $scope.lunchAdvise =  "Please enter data first";
      }
    };
  }

})();
