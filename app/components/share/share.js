'use strict';

angular
    .module('share')
    .controller('shareCtrl',[
        '$scope',
        '$http',
        'getUrl',
        function($scope,
                 $http,
                 getUrl) {            
            $scope.icon_size = "";
            var shortenUrl = 'http://urltinyfy.appspot.com/tinyurl?url=' + getUrl.current() + '&callback=JSON_CALLBACK';                
            var s = getUrl.shorten(shortenUrl);
            s.success(function(data){                
                $scope.newUrl = function(url) {
                    return getUrl.replaceWithCurrent(getUrl.title(url), data);
                }
                $scope.shortenedUrl = data['tinyurl'];
            })
            
           
            $http.get('json/share.json').success(function(data){
                $scope.shares = data;
            });
            
        }
    ]);