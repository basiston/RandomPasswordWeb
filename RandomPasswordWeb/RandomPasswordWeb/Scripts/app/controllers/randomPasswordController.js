'use strict';
app.controller('randomPasswordController', ['$scope', 'randomPasswordService', function ($scope, randomPasswordService) {


    $scope.Password =
    {
        value: ''
    }

    $scope.GeneratePassword = function (value) {
        if (value === "") {
            alert("value is null");
            return;
        }
        randomPasswordService.getrandomPassword(true, true, true, true, 5).then(function (result) {
            $scope.result = result.data;
        }, function (error) {
            $scope.error = error.statusText;
        });

    };

    //$scope.Clear = function () {
    //    $scope.Fizzbuzz = null;
    //    $scope.result = null;

    //};


}]);
