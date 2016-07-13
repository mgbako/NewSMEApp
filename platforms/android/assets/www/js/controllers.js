angular.module('starter.controllers', [])

.controller('HomeController', ['$scope', 'modalService', function($scope, modalService) {
  $scope.modalService = modalService;

  $scope.opens = function(){
    console.log("jkdlsl");
  }
}])

.controller('SignInController', function($scope, $ionicModal, modalService){
   $scope.modalService = modalService;
})
.controller('SignUpController', function($scope, $ionicModal, modalService){
   $scope.modalService = modalService;
})


;