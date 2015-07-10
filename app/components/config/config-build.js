'use strict';

angular
    .module('share')
    .service('config', [
        '$http',
        'getUrl',
        function($http, getUrl) {
            return {
                projectPath : '/sharetool-artemis/',
                template : {
                    tabs : 'build/components/tabs/tabs.html'
                },
                url : {
                    tiny : 'http://urltinyfy.appspot.com/tinyurl?url=' + 
                            getUrl.current() + 
                            '&callback=JSON_CALLBACK',
                    gov: 'https://go.usa.gov/api/shorten.jsonp?login=' + 
                         '' + //login
                        '' + //api key
                        '&longUrl=' + getUrl.current() + 
                        '&callback=JSON_CALLBACK'                    
                },
                json : {
                    share   : 'build/json/share.json',
                    toolbars : 'build/json/toolbar.json'
                },
                email : {
                    subject : document.title,
                    emailNewLine : '%0D%0A',
                    body : function(url, message) {
                        var body = "Your friend has shared " 
                                    + document.title 
                                    + " - " 
                                    + url 
                                    + "  with you";
                        body += this.emailNewLine;
                        body += this.emailNewLine;
                        body += (message != undefined) ? message : '';                        
                        return body;
                    }
                },
                shortenUrl : 'tiny'                
            };
        }
    ]);
