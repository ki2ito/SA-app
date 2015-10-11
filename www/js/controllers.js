angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ExercicesCtrl', function($scope, localStorage) {
    $scope.methods = [
        {
            "name" : "Lafey",
            "exercisesList" : [
                {
                    "name" : 'B',
                    "description" : "Dips",
                    "img" : ""
                },
                {
                    "name" : 'A6',
                    "description" : "Pompes au sol",
                    "img" : ""
                },
                {
                    "name" : 'A2',
                    "description" : "Pompes surélevées",
                    "img" : ""
                },
                {
                    "name" : 'C3',
                    "description" : "Tractions",
                    "img" : ""
                },
                {
                    "name" : 'G',
                    "description" : "Abdos",
                    "img" : ""
                }
            ]
        },
        {
            "name": "Cardio",
            "exercisesList": [
                {
                    "name": 'programme 1',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 2',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 3',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 4',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 5',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 6',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 7',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 8',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 9',
                    "description": "test",
                    "img": ""
                },
                {
                    "name": 'programme 10',
                    "description": "test",
                    "img": ""
                }
            ]
        }
    ];

    localStorage.set('methodsList', $scope.methods);
})

.controller('ExerciceCtrl', function($scope, $stateParams, localStorage) {

        console.log($stateParams);

        var methods = localStorage.get('methodsList');

        $scope.exercise = methods[$stateParams.method].exercisesList[$stateParams.exercise];
})

.controller('ScheduleCtrl', function($scope, localStorage) {
    $scope.schedule = [
        {
            "jour": "Lundi",
            "exercisesList": [
                {
                    "name": 'B',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 12,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                },
                {
                    "name": 'A6',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 16,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                },
                {
                    "name": 'A2',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 16,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                }
            ]
        },
        {
            "jour" : "Mardi",
            "exercisesList" : [
                {
                    "name" : 'C3',
                    "type" : 'muscu',
                    "series" : 6,
                    "repetitions" : 12,
                    "tempspause" : 25,
                    "tempsrecuperation" : 120
                },
                {
                    "name" : 'G',
                    "type" : 'muscu',
                    "series" : 6,
                    "repetitions" : 100,
                    "tempspause" : 25,
                    "tempsrecuperation" : 120
                },
                {
                    "name" : 'Vélo',
                    "program": 3,
                    "type" : 'cardio',
                    "duree" : 90,
                    "distance" : 50,
                    "calories" : 1000
                }
            ]
        },
        {
            "jour": "Mercredi",
            "exercisesList": [
                {
                    "name": 'B',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 12,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                },
                {
                    "name": 'A6',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 16,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                },
                {
                    "name": 'A2',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 16,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                }
            ]
        },
        {
            "jour" : "Jeudi",
            "exercisesList" : [
                {
                    "name" : 'C3',
                    "type" : 'muscu',
                    "series" : 6,
                    "repetitions" : 12,
                    "tempspause" : 25,
                    "tempsrecuperation" : 120
                },
                {
                    "name" : 'G',
                    "type" : 'muscu',
                    "series" : 6,
                    "repetitions" : 100,
                    "tempspause" : 25,
                    "tempsrecuperation" : 120
                },
                {
                    "name" : 'Vélo',
                    "program": 3,
                    "type" : 'cardio',
                    "duree" : 90,
                    "distance" : 50,
                    "calories" : 1000
                }
            ]
        },
        {
            "jour": "Vendredi",
            "exercisesList": [
                {
                    "name": 'B',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 12,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                },
                {
                    "name": 'A6',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 16,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                },
                {
                    "name": 'A2',
                    "type": 'muscu',
                    "series": 6,
                    "repetitions": 16,
                    "tempspause": 25,
                    "tempsrecuperation": 25
                }
            ]
        },
        {
            "jour" : "Samedi",
            "exercisesList" : [
                {
                    "name" : 'C3',
                    "type" : 'muscu',
                    "series" : 6,
                    "repetitions" : 12,
                    "tempspause" : 25,
                    "tempsrecuperation" : 120
                },
                {
                    "name" : 'G',
                    "type" : 'muscu',
                    "series" : 6,
                    "repetitions" : 100,
                    "tempspause" : 25,
                    "tempsrecuperation" : 120
                },
                {
                    "name" : 'Vélo',
                    "program": 3,
                    "type" : 'cardio',
                    "duree" : 90,
                    "distance" : 50,
                    "calories" : 1000
                }
            ]
        },
        {
            "jour" : "Dimanche",
            "exercisesList" : [
                {
                    "name" : 'REPOS',
                    "type" : 'repos',
                    "description" : "Jour de récupération"
                }
            ]
        }
    ];

    localStorage.set('schedule', $scope.schedule);
})

    .controller('TrainingCtrl', function($scope, localStorage) {

        //get date

        //get schedule for this date
        var schedule = localStorage.get('schedule');

        var trainingDay = schedule[0];

        $scope.training = [];

        angular.forEach(trainingDay.exercisesList, function(value, key){

            //données de base
            var exercise = {
                "name" : value.name,
                "series" : value.series,
                "repetitions" : value.repetitions,
                "tempspause" : value.tempspause,
                "tempsrecuperation" : value.tempsrecuperation,
                "trainingScore" : {}
            };

            //set each repetition fot the form
            for (var i = 0; i < value.series; i++) {

                exercise.trainingScore["repetition"+(i+1)] = {"id" : "repetition"+(i+1), "value" : value.repetitions};
            }

            $scope.training.push(exercise)
        });


        //enregistre une fois la séance finie
        //localStorage.set('training', $scope.training);
    })

;