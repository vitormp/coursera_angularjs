(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController() {
    var toBuy = this;
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController() {
    var alreadyBought = this;

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [];
    var boughtItems = [];

  }
})();
