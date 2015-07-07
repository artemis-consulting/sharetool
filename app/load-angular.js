(function($) {
     
        $('body').attr('ng-app', 'shareTool');
	    var angularDiv ="";
        angularDiv += '<div>';
        angularDiv += '<div ng-controller="loadToolbar" class="ng-scope"></div>';
        angularDiv += "<div ng-include=\"'" + ShareToolGlobalConfig.ENV.toolbarPath + "'\" >";
        angularDiv += '</div>';
        angularDiv += '</div>';
        
        // $(".sharetool_wrapper").prepend(angularDiv);
        $(".locshare-this").prepend(angularDiv).show();
        $("code").hide(); 
           
})(jQuery);