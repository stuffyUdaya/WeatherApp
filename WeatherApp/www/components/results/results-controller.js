'use strict';

angular.module('weatherApp.components.results', [])
    .controller('ResultsCtrl', ['darkSky', '$stateParams', function(darkSky, $stateParams){
        var vm = this;
        vm.vicinity = $stateParams.info.vicinity;    
        vm.weeklyData = 'getting weatherInfo....';
        darkSky.getDailyForecast($stateParams.info.lat, $stateParams.info.lng).then(function(result){
                vm.weeklyData = result;
        });
    }]);