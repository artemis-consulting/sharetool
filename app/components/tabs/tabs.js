'use strict';

angular
    .module('share')
    .directive('toolbar',[
        'config',
        function(config) {
            return {
                restrict: 'AEC',
                templateUrl: config.template.tabs
            }
        }
    ])
    .controller('toolbarCtrl',[
        '$scope',
        '$http',
        'config',
        function($scope,
                 $http,
                 config) {
            $http.get(config.json.toolbars).success(function(data){
                $scope.tabs = data;
            });
            
        }
    ]);