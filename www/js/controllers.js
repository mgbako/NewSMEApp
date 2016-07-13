angular.module('starter.controllers', [])

.controller('HomeController', ['$scope', 'modalService', function($scope, modalService, $ionicSideMenuDelegate) {
  $scope.modalService = modalService;

 
}])

.controller('DealsController', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {

  $scope.toggleLeftSideMenu = function(){
  	console.log('kdkdkdk');
    $ionicSideMenuDelegate.toggleLeft();
  }
}])


.controller('SignInController', function($scope, $ionicModal, modalService){
   $scope.modalService = modalService;
})
.controller('SignUpController', function($scope, $ionicModal, modalService){
   $scope.modalService = modalService;
})


;