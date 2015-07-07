// load angular
(function($) {
	
    $(document).ready(function(){ 
    	var angularDiv ="";
    	angularDiv += '<div ng-app="shareTool">';
    	angularDiv += '<div ng-controller="loadToolbar"></div>';
    	angularDiv += '<div ng-include="' + '\'/sharetool-improved/sharetool/app/components/toolbar/toolbar.html\'">';
    	angularDiv += '</div>';
    	angularDiv += '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>';
    	angularDiv += '<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/bower_components/angular/angular.js"></script>';
    	angularDiv += '<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap.js"></script>';
    	angularDiv += '<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.0/ui-bootstrap-tpls.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/angular-ui-bootstrap/ui-bootstrap-0.12.0.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/angular-ui-bootstrap/ui-bootstrap-tpls-0.12.0.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/app.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/version/version.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/version/version-directive.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/version/interpolate-filter.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/config/config-service.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/service/modal-service.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/toolbar/toolbar-controller.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/subscription/susbcription.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/share/share-controller.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/helper/helper-controller.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/email/email-controller.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/save/save-controller.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/service/url-service.js"></script>';
    	angularDiv += '<script src="/sharetool-improved/sharetool/app/components/log/log-service.js"></script>';
    	angularDiv += '</div>';
    	
        $(".sharetool_wrapper").prepend(angularDiv);
   //     angular.element("#angular-share-tool").scope().loadToolbar();
        console.log(angularDiv)
      //  alert(JSON.stringify(toolbarControllers.0))
    });
})(jQuery);

