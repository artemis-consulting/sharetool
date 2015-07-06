'use strict';

// Declare app level module which depends on views, and components
angular.module('share', [
  'ui.bootstrap'
]).config(['$sceDelegateProvider',
    function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://snsina.org/**',
    'http://is.gd/**',
    'http://tinyurl.com//**'
    ]);
}]);