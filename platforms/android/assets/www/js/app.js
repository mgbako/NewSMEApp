// Ionic Starter App

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
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

// setup an abstract state for the tabs directive
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

    .state('app.sme', {
      url: '/sme',
      views: {
        'menuContent': {
          templateUrl: 'templates/sme.html',
          controller: 'HomeController'
        }
      }
    })
    .state('app.signIn', {
      url: '/sme',
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
    templateUrl: 'templates/deals/deals.html'
  })

  .state('deals.marketplace', {
    url: '/marketplace',
    views: {
      'deals-home': {
        templateUrl: 'templates/deals/marketplace.html'
      }
    }
  })

  .state('deals.shop', {
    url: '/shop',
    views: {
      'deals-shop': {
        templateUrl: 'templates/deals/shop.html'
      }
    }
  })

  .state('deals.detail', {
    url: '/shop/:id',
    views: {
      'deals-shop': {
        templateUrl: 'templates/deals/details.html'
      }
    }
  })

  .state('deals.cart', {
    url: '/cart',
    views: {
      'deals-cart': {
        templateUrl: 'templates/deals/cart.html'
      }
    }
  })

  .state('deals.checkout', {
    url: '/checkout',
    views: {
      'deals-checkout': {
        templateUrl: 'templates/deals/checkout.html'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/sme');

});
