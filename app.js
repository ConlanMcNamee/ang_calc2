var app = angular.module('calc', [])


app.controller('CalcController', ['$http', '$scope', function($http, $scope) {
  
  $scope.a;
  $scope.b;
  $scope.operation = 'subtract'; // Default for <select> element.
  var url = document.URL;
  $scope.run = function() {
    $http({
      url: url + 'calculate',
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

  $scope.switch = true;
  $scope.operand;
  $scope.setOperand = function(numString) {
    if(!$scope.operand) {
      $scope.operand = numString;

      if($scope.switch) {
        $scope.a = Number($scope.operand);
      } else {
        $scope.b = Number($scope.operand);
      }

      console.log($scope.operand);
    } else {
      $scope.operand = $scope.operand + numString;

      if($scope.switch) {
        $scope.a = Number($scope.operand);
      } else {
        $scope.b = Number($scope.operand);
      }
      console.log($scope.operand);
    }
  }
  $scope.operator = 'add';
  $scope.setOperator = function(str) {
    $scope.switch = !$scope.switch;
    $scope.operand = 0;
    $scope.operation = str;
    console.log($scope.operation);
  }


}]);
