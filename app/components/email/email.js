'use strict';

angular
    .module('share')
    .controller('emailCtrl',[
        '$scope',
        '$http',
        '$rootScope',
        'getUrl',
        'config',
        'send',
        function($scope,
                 $http,
                 $rootScope,
                 getUrl,
                 config,
                 send) {            
            $scope.validEmail = "";
            $scope.errorEmail = "";
            var message = '',
                email   = '';

            $scope.sendEmail = function() { 

                email = (typeof $scope.shareEmail !== 'undefined') 
                            ? $scope.shareEmail : '';
                
                message = (typeof $scope.shareMessage !== 'object') 
                            ? $scope.shareMessage : ' ';  
                if(message != undefined) {
                    message = message.replace(/(?:\r\n|\r|\n)/g, config.email.emailNewLine);
                }  

                if(email === '') {
                    $scope.validEmail = 'has-error';
                    $scope.errorEmail = "Please provide recipient's email address";
                } else {
                    $scope.validEmail = "";
                    $scope.errorEmail = "";                    
                    send.email(email, 
                               message, 
                               $rootScope.shortenUrl);
                }
                
            }
            
            
        }
    ])
    .service('send',[
        'config',
        function(config) {
            return {
                email: function(email, message, url) {                                      
                    
                    window.location.href =  this.mailto(email, 
                                                        '', 
                                                        document.title, 
                                                        config.email.body(url, message));
                },
                mailto: function(emailTo, emailFrom, emailSubject, emailBody) {
                    return "mailto:" + emailTo +
                           "?from=" + emailFrom + 
                           "&subject=" + emailSubject +
                           "&body=" + emailBody;
                }
            }
        }
    ]);