angular.module('activityMonitor',[])
  .config(function ($routeProvider) {
  })
  .controller('ActivityMonitorCtrl', function ($scope, data, CURRENCIES) {
    $scope.wallet = data.wallet;
  });