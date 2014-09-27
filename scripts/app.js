angular.module('walletApp', [])
  .controller('MainCtrl', function ($scope) {
    $scope.wallet = localStorage.getItem('wallet') || {};
    $scope.money = {};
    $scope.money.currencies = ['£', '$', '€'];
    $scope.wallet.currency = $scope.wallet.currency || $scope.money.currencies[0];
    $scope.wallet.total = $scope.wallet.total || 0;

    $scope.operate = function () {
      if (!$scope.wallet.operations) {
        $scope.wallet.operations = [];
      }

      var operations = {'in': $scope.money.in, 'out': $scope.money.out};

      angular.forEach(operations, function (value, key) {
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

      // clear fields
      $scope.money.in = null;
      $scope.money.out = null;
    }
  });