angular.module('walletApp', [
  'ngRoute',
  'dashboard',
  'directives.cuEnsurePositiveNumber',
  'services.data'
  ])
  .constant('CURRENCIES',
    [
      {value: 0, name: 'GBP', symbol:'£'},
      {value: 1, name: 'USD', symbol:'$'},
      {value: 2, name: 'EUR', symbol:'€'}
    ]
  )
  .config(function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo:'/home'
    });
  })
  .controller('NavigationCtrl', function ($scope, $location) {
    $scope.reset = function () {
      $location.path('/reset');
    };
    $scope.home = function () {
      $location.path('/home');
    };
  });
