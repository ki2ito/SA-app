// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.localstorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.exercises', {
        url: '/exercises',
        views: {
            'menuContent': {
                templateUrl: 'templates/exercises.html',
                controller: 'ExercicesCtrl'
            }
        }
    })
    .state('app.exercise', {
        url: '/exercise/:method/:exercise',
        views: {
            'menuContent': {
                templateUrl: 'templates/exercise.html',
                controller: 'ExerciceCtrl'
            }
        }
    })

    .state('app.traininig', {
        url: '/training',
        views: {
            'menuContent': {
                templateUrl: 'templates/training.html',
                controller: 'TrainingCtrl'
            }
        }
    })
    .state('app.schedule', {
        url: '/schedule',
        views: {
            'menuContent': {
                templateUrl: 'templates/schedule.html',
                controller: 'ScheduleCtrl'
            }
        }
    })
    .state('app.stats', {
        url: '/stats',
        views: {
            'menuContent': {
                templateUrl: 'templates/stats.html'
            }
        }
    })
    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
