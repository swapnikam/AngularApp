'use strict';

// Declare app level module which depends on views, and components
userApp.controller('EditUserProfileController',
    ['$scope', '$rootScope', 'userDataService', '$location', 
    function ($scope, $rootScope, userDataService, $location) {
    	console.log("EditUserProfileController");
      $scope.user = userDataService.getUser()[0];
      console.log($scope.user);
    }
]);