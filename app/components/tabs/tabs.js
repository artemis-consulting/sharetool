'use strict';

angular
    .module('share')
    .directive('toolbar',[
        function() {
            return {
                restrict: 'AEC',
                templateUrl: 'components/tabs/tabs.html'
            }
        }
    ])
    .controller('toolbarCtrl',[
        '$scope',
        '$http',
        function($scope,
                 $http) {
            $http.get('json/toolbar.json').success(function(data){
                $scope.tabs = data;
            });
            
        }
    ]);