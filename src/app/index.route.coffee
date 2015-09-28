angular.module 'wut'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'

    $urlRouterProvider.otherwise '/'

    $stateProvider.state "home",
      url: "/"
      templateUrl: "app/home/home.html"
      controller: 'HomeCtrl'
      resolve:
        # Get the bootstrap file that describes the whole application
        bootstrap: ['$http', ($http)->
          $http.get('assets/data/bootstrap.json').then (res)-> res.data
        ]

    $stateProvider.state "about",
      url: "/about"
      templateUrl: "views/about.html"
