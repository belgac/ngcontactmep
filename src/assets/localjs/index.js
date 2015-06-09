angular.module('ngContactMep', ['ui.router', 'ngContactMep.homeController'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          main: {
            templateUrl: './assets/localjs/home/home.view.html'
          }
        }
      })
      .state('meps', {
        abstract: true,
        views: {
          main: {
            templateUrl: './assets/localjs/meps/meps.view.html'
          }
        }
      })
      .state('meps.list', {
        url: '/meps',
        views: {
          meps: {
            templateUrl: './assets/localjs/meps/list/mepsList.view.html'
          }
        }
      })
      .state('meps.mep', {
        url: '/meps/:id',
        views: {
          meps: {
            templateUrl: './assets/localjs/meps/mep/mep.view.html'
          }
        }
      })
      .state('campaigns', {
        abstract: true,
        views: {
          main: {
            templateUrl: './assets/localjs/campaigns/campaigns.view.html'
          }
        }
      })
      .state('campaigns.list', {
        url: '/campaigns',
        views: {
          campaigns: {
            templateUrl: './assets/localjs/campaigns/list/campaignsList.view.html'
          }
        }
      })
      .state('campaigns.campaign', {
        url: '/campaigns/:id',
        views: {
          campaigns: {
            templateUrl: './assets/localjs/campaigns/campaign/campaign.view.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }]);