angular.module('services.data', [])
  .service('data', function () {
    this.wallet = angular.fromJson(localStorage.getItem('wallet')) || {};

    this.reset = function () {
      localStorage.clear();
      this.wallet = {};
    };

    this.set = function (walletData) {
      this.wallet = walletData;
      localStorage.setItem('wallet', angular.toJson(walletData));
    };
  });