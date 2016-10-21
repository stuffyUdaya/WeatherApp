'use strict';

angular.module('weatherApp.components.home', [])
    .controller('HomeCtrl', ['$state', function($state){
        var vm = this;
        var lat, lng;
        vm.submit = function(address){
            lat = address.geometry.location.lat();
            lng = address.geometry.location.lng();
            var locationObj = {
                lat : lat,
                lng : lng,
                vicinity : address.vicinity
            };
            $state.go('results', {info : locationObj});
        }
    }]);