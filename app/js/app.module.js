(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr']);
        .value('apiUrl', '')
        .config(appConfig);

        appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

        function appConfig($urlRouterProvider, $stateProvider) {

        	$urlRouterProvider.otherwise('/login');

        	$stateProvider
        	.state('login', {
        		url: '/login',
        		controller: 'LoginController as login',
        		templateUrl: 'js/login/login.html'
        	})
//////////////////////////////////////////////////////////////////////
			
				.state('orders', {
					url: '/orders',
					controller: 'OrdersDetailController as orderDetail',
					templateUrl: 'js/orders/orders.html'
				})
				.state('menu', {
					url: '/menu',
					controller:'MenuDetailController as menuDetail',
					templateUrl: 'js/menu/menu.html'
				})
				.state('reviews', {
					url: '/reviews',
					controller: 'ReviewsDetailController as reviewDetail',
					templateUrl: 'js/reviews/reviews.html'
			});
        }
})();
