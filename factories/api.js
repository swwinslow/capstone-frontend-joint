app.factory('APIFactory', function($http, $rootScope){

  var data = {};
  var baseURL = "http://willshare.com/cs495/admin";

  function serializeData( data ) {
    // If this is not an object, defer to native stringification.
    if ( ! angular.isObject( data ) ) {
        return( ( data == null ) ? "" : data.toString() );
    }

    var buffer = [];

    // Serialize each key in the object.
    for ( var name in data ) {
        if ( ! data.hasOwnProperty( name ) ) {
            continue;
        }

        var value = data[ name ];

        buffer.push(
            encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
        );
    }

    // Serialize the buffer and clean it up for transportation.
    var source = buffer.join( "&" ).replace( /%20/g, "+" );
    return( source );
    }

  data.loginUser = function (user) {
        return $http({
            method: "POST",
            url: baseURL + '/Login.php',
            data: serializeData ({
                "email"         : user.email,
                "password"      : user.password,
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    data.checkSession = function (session) {
      console.log(session);
          return $http({
              method: "POST",
              url: baseURL + '/SessionCheck.php',
              data: serializeData ({
                "session_id"    : $rootScope.userSessionId,
                "session_key"   : $rootScope.userSessionKey
              }),
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
      }

      data.testEmail = function(user) {
        console.log(session);
            return $http({
                method: "POST",
                url: baseURL + '/emailTest.php',
                data: serializeData ({
                  "email"    : user.email,

                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
      }

      data.checkToken = function(token) {
            return $http({
                method: "POST",
                url: baseURL + '/checkToken.php',
                data: serializeData ({
                  "token"    : token,

                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
      }




  return data;
});
