'use strict';

angular
    .module('share')
    .service('getUrl', [
        '$http',
        //'config',
        function($http) {
            return {
                current: function() {
                    return window.location.href;
                },
                replaceWithCurrent : function(url, shortenUrl) {
                    return url.replace("currentUrl",shortenUrl['tinyurl']);
                }/*,
            /*    usaGov: function(url) {
                    var shortenUrl = config.url.govShortenUrl.url + 
                                     config.url.govShortenUrl.login + 
                                     config.url.govShortenUrl.apiKey + 
                                     config.url.govShortenUrl.longUrl + 
                                     encodeURIComponent(this.current()) + 
                                     config.url.govShortenUrl.comeBack;
                   
                    
                        return $http.jsonp(shortenUrl).success(function(data){                     
                                                        return data;
                                                    }).error(function(data){
                                                        return data;
                                                    });
                    
                }*/,
                title : function(url) {
                    return url.replace("currentTitle",document.title);
                },
                shorten: function(url) {                    
                    return $http.jsonp(url);
                }
            };
        }
    ]);
