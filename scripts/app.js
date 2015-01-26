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
               .when('/creditPetition', {
                    templateUrl: 'views/creditPetition.html'
                })
               .when('/firmInstitution', {
                    templateUrl: 'views/firmInstitution.html'
                })
               .when('/audit', {
                    templateUrl: 'views/audit.html'
                })
               .when('/consultancy', {
                    templateUrl: 'views/consultancy.html'
                })
               .when('/tender', {
                    templateUrl: 'views/tender.html'
                })
               .when('/training', {
                    templateUrl: 'views/training.html'
                })
                .when('/estimate', {
                    templateUrl: 'views/estimate.html'
                })
                .when('/referencies', {
                    templateUrl: 'views/referencies.html'
                })
                .when('/actualCredit', {
                    templateUrl: 'views/actualCredit.html'
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
				$rootScope.userRoles = USER_ROLES;
				$(".view-frame").on('oTransitionEnd', function( event ) { 
					alert( "Finished transition!" ); 
				});
                $rootScope.$on('$routeChangeStart', function (event, next) {
                	console.log("start");
                });
                $rootScope.$on('$locationChangeSuccess', function (event, next) {
                	console.log("succes");
                });
                
        });
