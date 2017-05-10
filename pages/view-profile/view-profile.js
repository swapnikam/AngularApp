'use strict';

// Declare app level module which depends on views, and components
userApp.controller('ViewUserProfileController',
    ['$scope', '$rootScope', 'userDataService', '$location', 
    function ($scope, $rootScope, userDataService, $location) {
    	console.log("ViewUserProfileController");
    	$scope.user = userDataService.getUser()[0];
    	console.log($scope.user);

        $scope.editProfile = function() {
            console.log("Edit-Profile");
            $location.path('/edit-profile');
        }
    }
]);