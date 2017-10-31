app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/login", {
      templateUrl : "views/login.html",
      controller : "loginController"
  })
  .when("/", {
      templateUrl : "views/login.html",
      controller : "loginController"
  })
  .when("/select", {
      templateUrl : "views/select.html",
      controller : "selectController",
      resolve: {
        'data': isAuthenticated
      }
  })
  .when("/resetpassword/:token", {
      templateUrl : "views/resetPassword.html",
      controller : "resetPasswordController"
  })
  .otherwise({
    templateUrl : "views/404.html",
    controller: "404Controller"
  });
}]);


var isAuthenticated = function ($rootScope, $location, sessionService, APIFactory) {
    var session = sessionService.hasRecentSession();
    if (session) {
        $rootScope.isLoggedIn = true;
        //API FACTORY CALL
        APIFactory.checkSession(session).then(function (response){
          console.log(response);
        }, function(error){
          $rootScope.redirect = $location.path();
          $location.path("/login");
        });

    } else {
        $rootScope.redirect = $location.path();
        $location.path("/login");
    }
};

var isTokenValid = function ($rootScope, $location, sessionService, APIFactory, $routeParams) {


    // if (session) {
    //     $rootScope.isLoggedIn = true;
    //
    //     //API FACTORY CALL
    //     APIFactory.checkToken(session).then(function (response){
    //       console.log(response);
    //     }, function(error){
    //       console.log('lololol');
    //       $rootScope.redirect = $location.path();
    //       $location.path("/login");
    //     });
    //
    // } else {
    //     $rootScope.redirect = $location.path();
    //     $location.path("/login");
    // }
};
