"use strict";
app.factory("randomPasswordService",
[
    "$http", "$location", function ($http, $location) {

        var randomPasswordServiceFactory = {};
    
        var _getrandomPassword = function(includeUpperCase,
            includeLowerCase,
            includeNumbers,
            includeSpecialChars,
            stringlength) {

            return $http({
                    method: "GET",
                    url: $("#hdRoot").val().replace("http:", location.protocol)+"/api/RandomPasswordApi/",
                    params: {
                        includeUpperCase: includeUpperCase,
                        includeLowerCase: includeLowerCase,
                        includeNumbers: includeNumbers,
                        includeSpecialChars: includeSpecialChars,
                        stringlength: stringlength
                    }

                })
                .then(function mySucess(response) {
                    return response;
                });

        };

        randomPasswordServiceFactory.getrandomPassword = _getrandomPassword;

        return randomPasswordServiceFactory;
    }
]);