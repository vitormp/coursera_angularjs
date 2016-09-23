(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.isEmptyToBuyList = function () {
      return ShoppingListCheckOffService.getToBuyItems().length === 0;
    };

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }

  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

    alreadyBought.isEmptyBoughtList = function () {
      return ShoppingListCheckOffService.getBoughtItems().length === 0;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
                  {name: "cookies", quantity: 30},
                  {name: "milks", quantity: 20},
                  {name: "chocolates", quantity: 44},
                  {name: "apples", quantity: 42},
                  {name: "oranges", quantity: 22},
                  {name: "ice creams", quantity: 3}
                ];
    var bought = [];

    service.buyItem = function (itemIndex) {
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex, 1);
    }

    service.getToBuyItems = function () {
      return toBuy;
    };

    service.getBoughtItems = function () {
      return bought;
    };

  }
})();
