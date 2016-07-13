angular.module('starter.services', [])

.service('modalService', function($ionicModal){
  this.openModal = function(id){
    var _this = this;

    if(id == 1){
      $ionicModal.fromTemplateUrl('templates/signIn.html', {
        scope: null,
        animation: 'slide-in-up',
        controller: 'SignInController'
      }).then(function(modal){
        _this.modal = modal;
        _this.modal.show();
      });
    }

     if(id == 2){
      $ionicModal.fromTemplateUrl('templates/signUp.html', {
        scope: null,
        controller: 'SignUpController'
      }).then(function(modal){
        _this.modal = modal;
        _this.modal.show();
      });
    }
    

  }

  this.closeModal = function(){
    var _this = this;
    if(!_this.modal) return;

    _this.modal.hide();
    _this.modal.remove();
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
