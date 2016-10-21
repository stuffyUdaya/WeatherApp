'use strict';

angular.module('WeatherApp', [
    'ui.router',
    'weatherApp.core.router',
    'weatherApp.components.home',
    'weatherApp.components.results',
    'ngAutocomplete',
    'dark-sky'
])
    .config(['darkSkyProvider', function(darkSkyProvider) {
        darkSkyProvider
            .setApiKey('1cd8ac879bdc1b797e72759ec5005987');
    }])
    .run(['$state', function($state){
        $state.go('home');
    }]);