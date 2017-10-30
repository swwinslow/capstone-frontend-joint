app.controller('resetPasswordController', function($scope, APIFactory, sessionService, $rootScope, $location, $routeParams) {

  APIFactory.checkToken($routeParams.token).then(function (response){
      console.log(response);
  }, function(error){
    //there was an error to it
    window.alert("Invalid Token. Please try again");
    $location.path("/");
  });

});
