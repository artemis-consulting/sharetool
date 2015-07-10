'use strict';

angular
    .module('share')
    .controller('shareCtrl',[
        '$scope',
        '$rootScope',
        '$http',
        'getUrl',
        'config',
        function($scope,
                 $rootScope,
                 $http,
                 getUrl,
                 config) {            
            $scope.icon_size = "";
            
            if(config.shortenUrl == 'tiny') {
                var shortenUrl = config.url.tiny; 
            } else {
                var shortenUrl = config.url.gov; 
            }         
            var s = getUrl.shorten(shortenUrl);
            s.success(function(data){                
                $scope.newUrl = function(url) {
                    return getUrl.replaceWithCurrent(getUrl.title(url), data);
                }
                $scope.shortenedUrl = data['tinyurl'];
                $rootScope.shortenUrl = data['tinyurl'];                
            })
            
           
            $http.get(config.projectPath + config.json.share).success(function(data){
                $scope.shares = data;
            });
            
        }
    ]);