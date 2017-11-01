app.controller('UserController', function($scope, APIFactory, $rootScope) {

      $scope.makeAdmin = function (id){
        //SEND TO APIFactor
        console.log('make admin');
      }

      $scope.deleteUser = function (id){
        console.log('delete');
      }

      APIFactory.getUsers().then(function (response){
        console.log(response.data.Users);
        $scope.users = response.data.Users;
      });


});
