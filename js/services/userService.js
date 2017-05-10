userApp.service('userDataService', function(){
  var userList = [];

  var addUser = function(newObj) {
    userList.push(newObj);
  };

  var getUser = function(){
    return userList;
  };

  var clearUserList = function(){
    userList = [];
  };

  return {
    getUser: getUser,
    addUser: addUser,
    clearUserList: clearUserList
  };
});