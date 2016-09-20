(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantOrdersController', RestaurantOrdersController);

    RestaurantOrdersController.$inject = ['$state', '$stateParams', 'RestaurantFactory'];

    /* @ngInject */
    function RestaurantOrdersController($state, $stateParams, RestaurantFactory) {
        var vm = this;
        
        vm.getTotal = getTotal;
        activate();

        function activate() {
        	if ($stateParams.restaurantId) {
        		RestaurantFactory.getById($stateParams.restaurantId).then(
        			function(data) {
        				vm.details = data;
        			}
        		);
        	}
        	else
        	{
        		vm.details = {};
        	}
        }

        function getTotal(food) {
        	var sum = 0;

        	for(var i = 0; i < food.orderItems.length; i++) {
        		sum += food.orderItems[i].menuItem.price;
        	}
        }
    }
})();