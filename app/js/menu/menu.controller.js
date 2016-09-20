(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantMenuController', RestaurantMenuController);

    RestaurantMenuController.$inject = ['MenuGroupFactory', 'MenuItemFactory', '$stateParams', 'RestaurantFactory'];

    function RestaurantMenuController(MenuGroupFactory, MenuItemFactory, $stateParams, RestaurantFactory) {
        var vm = this;

        vm.menu = [];
        vm.deleteMenuItem = deleteMenuItem;
        vm.addMenuItem = addMenuItem;
        getMenu();

/******* GET ALL ITEMS ON THE MENU ***************************************************************************************/
        function getMenu(){
        	RestaurantFactory.getById($stateParams.restaurantId).then(
        		function(response){
        			vm.menu = response.menuGroups;
        			console.log(vm.menu);
        		}
        	);
        }
/******** DELETE AN ITEM **************************************************************************************/
        function deleteMenuItem(menuItem){
        	if(confirm("Are you sure you want to remove this item?")){
	        	MenuItemFactory.remove(menuItem.menuItemId).then(
	        		function(response){
	        			getMenu();
	        			alert("Item Deleted");
	        		}
	        	);	
        	}
        }
/********** ADD AN ITEM ************************************************************************************/
        function addMenuItem(newMenuItem, menuGroupId){
        	newMenuItem.menuGroupId = menuGroupId;
        	MenuItemFactory.add(newMenuItem).then(
        		function(){
        			getMenu();
        			newMenuItem = {};
        		}
        	);
        }
        
    }
})();


