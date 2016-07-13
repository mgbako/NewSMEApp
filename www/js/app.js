// Ionic Starter themarketplace

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the themarketplace can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

// setup an abstract state for the tabs directive
    .state('themarketplace', {
      url: '/themarketplace',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

    .state('themarketplace.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        }
      }
    })

    .state('themarketplace.directory', {
      url: '/directory',
      views: {
        'menuContent': {
          templateUrl: 'templates/directory/directory.html',
          controller: 'HomeController'
        }
      }
    })

    .state('themarketplace.allDirectory', {
      url: '/allDirectory',
      views: {
        'menuContent': {
          templateUrl: 'templates/directory/allDirectory.html',
          controller: 'HomeController'
        }
      }
    })

    .state('themarketplace.directoryDetails', {
      url: '/directory/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/directory/details.html',
          controller: 'HomeController'
        }
      }
    })

    .state('themarketplace.community', {
      url: '/community',
      views: {
        'menuContent': {
          templateUrl: 'templates/community/community.html',
          controller: 'HomeController'
        }
      }
    })
    .state('themarketplace.communitydetails', {
      url: '/community/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/community/details.html',
          controller: 'HomeController'
        }
      }
    })

    .state('themarketplace.resources', {
      url: '/resources',
      views: {
        'menuContent': {
          templateUrl: 'templates/resources/resources.html',
          controller: 'HomeController'
        }
      }
    })

    .state('themarketplace.resources_details', {
      url: '/resources/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/resources/resourcesDetails.html',
          controller: 'HomeController'
        }
      }
    })

    .state('themarketplace.resources_details_info', {
      url: '/resources/:id/:id2',
      views: {
        'menuContent': {
          templateUrl: 'templates/resources/resourcesDetails.html',
          controller: 'HomeController'
        }
      }
    })

    .state('themarketplace.brief', {
      url: '/brief',
      views: {
        'menuContent': {
          templateUrl: 'templates/brief/brief.html',
          controller: 'HomeController'
        }
      }
    })
    .state('themarketplace.signin', {
      url: '/signin',
      views: {
        'menuContent': {
          templateUrl: 'templates/signIn.html',
          controller: 'SignInController'
        }
      }
    })

  // setup an abstract state for the tabs directive
    .state('deals', {
    url: '/deals',
    abstract: true,
    templateUrl: 'templates/deals/deals.html',
    controller: 'DealsController'
  })

  .state('deals.marketplace', {
    url: '/marketplace',
    views: {
      'deals-home': {
        templateUrl: 'templates/deals/marketplace.html',
        controller: 'DealsController'
      }
    }
  })

  .state('deals.shop', {
    url: '/shop',
    views: {
      'deals-shop': {
        templateUrl: 'templates/deals/shop.html',
        controller: 'DealsController'
      }
    }
  })

  .state('themarketplace.deals.detail', {
    url: '/shop/:id',
    views: {
      'deals-shop': {
        templateUrl: 'templates/deals/details.html',
        controller: 'DealsController'
      }
    }
  })


  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('themarketplace/home');

});
