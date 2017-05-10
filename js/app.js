'use strict';

// Declare app level module which depends on views, and components
var userApp = angular.module('userApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider
  
  // route for the user Listing page
  .when('/list', {
      templateUrl : 'pages/user-list/list-user.html',
      controller  : 'UserListController'
  })

  // route for the view profile page
  .when('/view-profile', {
      templateUrl : 'pages/view-profile/view-profile.html',
      controller  : 'ViewUserProfileController'
  })

  // route for the edit profile page
  .when('/edit-profile', {
      templateUrl : 'pages/edit-profile/edit-profile.html',
      controller  : 'EditUserProfileController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);