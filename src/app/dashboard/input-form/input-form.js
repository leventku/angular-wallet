"use strict";
angular.module('inputForm',[])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'src/app/dashboard/input-form/input-form.tpl.html',
        controller: 'InputFormCtrl'
      })
      .when('/reset', {
        templateUrl: 'src/app/dashboard/input-form/input-form.tpl.html',
        controller: 'InputFormResetCtrl'
      })
  })
  .controller('InputFormCtrl', function ($scope, CURRENCIES, data, $rootScope) {
    $scope.wallet = data.wallet;
    $scope.money = {};
    $scope.money.in = $scope.money.out = 0;
    $scope.money.currencies = CURRENCIES;
    $scope.wallet.currency = $scope.wallet.currency ?
      $scope.money.currencies[$scope.wallet.currency.value] :
      $scope.money.currencies[0];
    $scope.wallet.total = (data.wallet && data.wallet.total) ?
      data.wallet.total : 0;
    $scope.checkCurrency = function () {
      return data.wallet.total > 0;
    };

    $scope.checkFunds = function () {
      return ($scope.money.in - $scope.money.out + $scope.wallet.total >= 0)
    }

    $scope.process = function () {
      if (!$scope.wallet.operations) {
        $scope.wallet.operations = [];
      }

      var inAndOut = {'in': $scope.money.in, 'out': $scope.money.out};

      if ($scope.money.in - $scope.money.out + $scope.wallet.total < 0) {

        return;
      }

      angular.forEach(inAndOut, function (value, key) {
        if (value) {
          value = key === 'in' ? value : -value;

          $scope.wallet.operations.push({amount: value, date: new Date()});
        }
      });

      // reset total, then sum all operations made so far
      $scope.wallet.total = 0;

      angular.forEach($scope.wallet.operations, function (value) {
        $scope.wallet.total += value.amount;
      });

      data.set($scope.wallet);

      // clear fields
      $scope.money.in = $scope.money.out = 0;
    }
  })
  .controller('InputFormResetCtrl', function ($location, data) {
    data.reset();
    $location.path('/home').replace();
  })
