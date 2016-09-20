(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$stateParams'];

    /* @ngInject */
    function LoginController($state, $stateParams) {
        var vm = this;
        vm.title = 'LoginController';
        vm.loginInfo = {};
        vm.loginRestaurant = loginRestaurant;
        

        ////////////////

        function loginRestaurant() {
        	if (vm.loginInfo.password != 'butts') {
        		alert('the password is butts');
        	}
        	else
        	{
        		$state.go();
        	}
        }
    }
})();