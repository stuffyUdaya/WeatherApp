'use strict';

angular.module('weatherApp.core.router', [])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    var states = [];
     var homeView = {};
    homeView['main-content@'] = {
        templateUrl : 'www/components/home/home.tpl.html',
        controller : 'HomeCtrl as homeCtrl'
    };
    states.push({
        name : 'home',
        views : homeView,
        url : '/'
    });
    
    var resultsView = {};
    resultsView['main-content@'] = {
        templateUrl : 'www/components/results/results.tpl.html',
        controller : 'ResultsCtrl as resultsCtrl'
    };
    states.push({
        name : 'results',
        views : resultsView,
        url : '/results',
        params :{
            info : null
        }
    });

    /**
     * UI routes initialization
     */
    angular.forEach(states, function (state) {
        $stateProvider.state(state);
    });

    $urlRouterProvider.otherwise('/');
}]);