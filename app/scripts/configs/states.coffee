###*
 # @ngdoc overview
 # @name wutApp
 # @description
 # # wutApp
 #
 # Main module of the application.
###
angular.module('wutApp').config [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  ($stateProvider, $urlRouterProvider, $locationProvider)->
    # $locationProvider.hashPrefix('!')
    $urlRouterProvider.otherwise "/"

    $stateProvider.state "home",
      url: "/"
      templateUrl: "views/home.html"
      controller: 'HomeCtrl'
      resolve:
        # Get the bootstrap file that describes the whole application
        bootstrap: ['$http', ($http)-> $http.get('data/bootstrap.json').then (res)-> res.data ]

    $stateProvider.state "about",
      url: "/about"
      templateUrl: "views/about.html"
]
