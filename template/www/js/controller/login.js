/**
 * Created by Gabeta on 24/07/2016.
 */
app.controller('loginCtrl',function($scope,$state,$ionicHistory){

  $scope.sideMenu = false;

  $scope.login = function(){
    $state.go('home');
    $ionicHistory.nextViewOptions({historyRoot : true});
  }

})
