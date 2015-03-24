'use strict';

/* App Module */

var jhipsterApp = angular.module('jhipsterApp', ['tmh.dynamicLocale',
    'ngAnimate', 'ngResource', 'ngRoute', 'ngCookies', 'jhipsterAppUtils', 'pascalprecht.translate', 'truncate']);

jhipsterApp
    .config(function ($routeProvider, $httpProvider, $translateProvider, tmhDynamicLocaleProvider, USER_ROLES) {
            $routeProvider
                .when('/error', {
                    templateUrl: 'views/error.html',
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
               .when('/test', {
                    templateUrl: 'views/test.html',
                })
               .when('/firmClinic', {
                    templateUrl: 'views/firmClinic.html'
                })
               .when('/firmEstimate', {
                    templateUrl: 'views/firmEstimate.html'
                })
               .when('/audit', {
                    templateUrl: 'views/audit.html'
                })
               .when('/tender', {
                    templateUrl: 'views/tender.html'
                })
                .otherwise({
                    templateUrl: 'views/main.html',
                    controller: 'MainController',
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                });

            // Initialize angular-translate
            $translateProvider.useStaticFilesLoader({
                prefix: 'i18n/',
                suffix: '.json'
            });

            $translateProvider.preferredLanguage('hu');

            $translateProvider.useCookieStorage();

            tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js')
            tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');
        })
        .run(function($rootScope, $location, $http, Session, USER_ROLES) {
                $rootScope.authenticated = true;
                $rootScope.$on('$routeChangeStart', function (event, next) {
                	$(".navbar li").removeClass("active");
                	var href = next.originalPath ? "#" + next.originalPath : "#";
            		$(".navbar li a[href='" + href + "']").parents("li").addClass("active");
                });
        });
