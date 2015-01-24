'use strict';

/* Controllers */

jhipsterApp.controller('MainController', function ($scope) {
    });

jhipsterApp.controller('LanguageController', function ($scope, $translate, LanguageService) {
        $scope.changeLanguage = function (languageKey) {
            $translate.use(languageKey);

            LanguageService.getBy(languageKey).then(function(languages) {
                $scope.languages = languages;
            });
        };

        LanguageService.getBy().then(function (languages) {
            $scope.languages = languages;
        });
    });

jhipsterApp.controller('MenuController', function ($scope) {
    });
