angular.module('directives.cuEnsurePositiveNumber', [])
  .directive('cuEnsurePositiveNumber', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, ele, attrs, c) {
        scope.$watch(attrs.ngModel, function () {
          if(parseFloat(ele.val(),10) >= 0) {
            c.$positive = true;
            c.$valid = true;
          }
          else {
            if (ele.val() == ''){
              c.$positive = false;
              c.$valid = true;
            } else {
              c.$positive = false;
              c.$valid = false;
            }
          }
        })
      }
    }
  });