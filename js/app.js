angular
  .module('clientApp', ['ngRoute', 'ngCookies','angular.viacep'])
  .config(function ($routeProvider, $httpProvider) {
    //Configuração das rotas
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'js/controllers/login.js'
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'js/controllers/home.js'
      })
      .when('/verclientes', {
        templateUrl: 'views/clientes/verclientes.html',
        controller: 'VerclientesCtrl',
        controllerAs: 'js/controllers/clientes/verclientes.js'
      })
      .when('/adicionarclientes', {
        templateUrl: 'views/clientes/adicionarclientes.html',
        controller: 'AdicionarclientesCtrl',
        controllerAs: 'js/controllers/clientes/adicionarclientes.js'
      })
      .when('/verfuncionarios', {
        templateUrl: 'views/funcionarios/verfuncionarios.html',
        controller: 'VerfuncionariosCtrl',
        controllerAs: 'js/controllers/funcionarios/verfuncionarios.js'
      })
      .when('/adicionarfuncionarios', {
        templateUrl: 'views/funcionarios/adicionarfuncionarios.html',
        controller: 'AdicionarfuncionariosCtrl',
        controllerAs: 'js/controllers/funcionarios/adicionarfuncionarios.js'
      })
      //Push de interceptors
      $httpProvider.interceptors.push('errorInterceptor');

  })
  .run(['$rootScope', '$location', '$cookies',
    function ($rootScope, $location, $cookies) {
      $rootScope.BASE_URL = 'http://localhost:8844/api';
      $rootScope.currentUser = $cookies.getObject('currentUser');
    }]);