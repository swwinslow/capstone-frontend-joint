app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "views/login.html",
      controller : "loginController"
  })
  .when("/select", {
      templateUrl : "views/select.html",
      controller : "selectController"
  })
  .otherwise({
    templateUrl : "views/404.html",
    controller: "404Controller"
  });
}]);


var isAuthenticated = function ($rootScope, $location, sessionService,) {
    var session = sessionService.hasRecentSession();
    if (session) {
        $rootScope.isLoggedIn = true;

        UserFactory.getAuth().then(function (response){
            var data = response.data.data;
            if (data.auth_level == 1){
                $rootScope.AuthUser = true;
            } else {
                $rootScope.AuthUser = false;
            }
        }, function(error){
            window.alert('Network Error. Please try again.');
            $location.path('/');
        });
        return true;
    } else {
        $rootScope.redirect = $location.path();
        $location.path("/login");
    }
};
