var app = angular.module('calc', [])

// .config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.withCredentials = true;
// }]);

app.controller('CalcController', ['$http', '$scope', function($http, $scope) {
  //changed to this. instead of $scope when testing will try both though
  $scope.a = 15;
  $scope.b = 2;
  $scope.operation = 'subtract'; // Default for <select> element.

  $scope.run = function() {
    $http({
      url: 'http://localhost:3000/calculate',
      method: "GET",
      params: {
        operands: {
          a: $scope.a,
          b: $scope.b
        },
        operation: this.operation
      }
    })
    .then(function(response) {
      console.log(response);
      $scope.answer = response.data.answer;
    })
  };


}]);
