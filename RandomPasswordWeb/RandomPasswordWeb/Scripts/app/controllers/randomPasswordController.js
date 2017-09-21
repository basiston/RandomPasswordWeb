'use strict';
app.controller('randomPasswordController', ['$scope', 'randomPasswordService', function ($scope, randomPasswordService) {


    $scope.GeneratePasswordReq =
    {
        includeUpperCase: false,
        includeLowerCase: false,
        includeNumbers: false,
        includeSpecialChars: false,
        stringlength:4
    }

    $scope.GeneratePassword = function (generatepasswordrequirement) {
        if (generatepasswordrequirement === "" || generatepasswordrequirement ==null) {
            alert("Please select one option");
            return;
        }
        randomPasswordService.getrandomPassword(generatepasswordrequirement.includeUpperCase,
                                               generatepasswordrequirement.includeLowerCase, generatepasswordrequirement.includeNumbers,
                                               generatepasswordrequirement.includeSpecialChars, generatepasswordrequirement.stringlength).then(function (result) {
            $scope.result = result.data;
        }, function (error) {
            $scope.error = error.statusText;
        });

    };

    $scope.Clear = function() {
        $scope.GeneratePasswordReq = null;
        $scope.result = null;
    };

    //$scope.Clear = function () {
    //    $scope.Fizzbuzz = null;
    //    $scope.result = null;

    //};


}]);
