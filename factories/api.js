app.factory('APIFactory', function($http){

  var data = {};
  var baseURL = "XXXXX";

  data.getAllStations = function() {
    return $http.get(baseURL + 'GetAllStations.php');
  }
  return data;
});
