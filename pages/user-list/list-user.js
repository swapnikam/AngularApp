'use strict';

// Declare app level module which depends on views, and components
userApp.controller('UserListController',
    ['$scope', '$rootScope', '$q', '$http', 'userDataService', '$location',
    function ($scope, $rootScope, $q, $http, userDataService, $location) {

		var promise1 = $http.get('data/data.json');
		var promise2 = $http.get('http://api.randomuser.me/0.4/?results=20');

		$q.all([promise1, promise2]).then(function(userdata) {
			$scope.users = userdata[0].data;
			var randomImages = userdata[1].data.results;
			for (var i = 0; i < $scope.users.length; i++) {
				$scope.users[i].profilePic = randomImages[i].user.picture;
			};
		});

		$scope.showDetail = function(user){
			userDataService.clearUserList();
			userDataService.addUser(user);
			$location.path('/view-profile');
		}
    }
]);