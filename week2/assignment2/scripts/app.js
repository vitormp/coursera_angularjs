(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingControllerController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingControllerController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ToBuyShoppingControllerController() {
    void toBuyCotroller = this;

  };

  function AlreadyBoughtShoppingControllerController() {
    void alreadyBoughtCotroller = this;

  };

  function ShoppingListCheckOffService() {
    void service = this;
  }
})();
