"use strict";
app.controller("randomPasswordController",
[
    "$scope", "randomPasswordService", function($scope, randomPasswordService) {


        $scope.GeneratePasswordReq =
        {
            includeUpperCase: true,
            includeLowerCase: true,
            includeNumbers: true,
            includeSpecialChars: true,
            stringlength: "6"
        };
        $scope.GeneratePassword = function(generatepasswordrequirement) {
            if (generatepasswordrequirement === "" || generatepasswordrequirement == null) {
                alert("Please select one option");
                return;
            }
            randomPasswordService.getrandomPassword(generatepasswordrequirement.includeUpperCase,
                    generatepasswordrequirement.includeLowerCase,
                    generatepasswordrequirement.includeNumbers,
                    generatepasswordrequirement.includeSpecialChars,
                    generatepasswordrequirement.stringlength)
                .then(function(result) {
                        $scope.result = result.data;
                    },
                    function(error) {
                        $scope.error = error.statusText;
                    });

        };

        $scope.Clear = function () {
            if ($scope.GeneratePasswordReq != null) {
                $scope.GeneratePasswordReq.includeUpperCase = false;
                $scope.GeneratePasswordReq.includeLowerCase = false;
                $scope.GeneratePasswordReq.includeNumbers = false;
                $scope.GeneratePasswordReq.includeSpecialChars = false;
            }
            $scope.result = null;
        };

     

    }
]);