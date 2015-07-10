'use strict';

angular
    .module('share')
    .directive('toolbar',[
        'config',
        function(config) {
            return {
                restrict: 'AEC',
                templateUrl: config.projectPath + config.template.tabs
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
            $http.get(config.projectPath + config.json.toolbars).success(function(data){
                for(tab in data) {
                    data[tab].template = config.projectPath + data[tab].template;
                }
                $scope.tabs = data;

                $scope.projectPath = config.projectPath;
            });
            
        }
    ]);