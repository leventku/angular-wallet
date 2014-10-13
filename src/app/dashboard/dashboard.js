angular.module('dashboard',['inputForm', 'activityMonitor'])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'src/app/dashboard/dashboard.tpl.html',
      })
  });