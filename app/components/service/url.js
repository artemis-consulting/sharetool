'use strict';

angular
    .module('share')
    .service('getUrl', [
        '$http',
        function($http) {
            return {
                current: function() {
                    return window.location.href;
                },
                replaceWithCurrent : function(url, shortenUrl) {
                    return url.replace("currentUrl",shortenUrl['tinyurl']);
                },
                title : function(url) {
                    return url.replace("currentTitle",document.title);
                },
                shorten: function(url) {                    
                    return $http.jsonp(url);
                }
            };
        }
    ]);
