(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantReviewsController', RestaurantReviewsController);

    RestaurantReviewsController.$inject = ['ReviewFactory', '$stateParams'];

    /* @ngInject */
    function RestaurantReviewsController(ReviewFactory, $stateParams) {
        var vm = this;
        
        ////////////////
        activate();
        ////////////////

        function activate() {
            ReviewFactory.getAll().then(
                function(data) {
                    vm.reviews = data;
                }
            );
        }
    }
})();