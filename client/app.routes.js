var app = angular.module('extensibleApp', ['ngRoute']);
var customRoutes = [];

app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/feature1', {
                templateUrl: '/feature1/feature1.html',
                controller: 'Feature1Controller'
            });
            

        //Load custom routes
        customRoutes.forEach(function(custRoute) {
            $routeProvider.when(custRoute.path, custRoute.action);
        });

        $routeProvider.otherwise({
            redirectTo: '/feature1'
        });
    }
]);

//This is global and bad, but it's just a sample
function addCustomRoute(route) {
  customRoutes.push(route);
}