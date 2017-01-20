var joshuaschmuck;
(function (joshuaschmuck) {
    angular.module('joshuaschmuck', ['ui.router', 'ngResource', 'ui.bootstrap', 'uiGmapgoogle-maps']).config(function (uiGmapGoogleMapApiProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: joshuaschmuck.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('projects', {
            url: '/projects',
            templateUrl: '/ngApp/views/project.html',
            controller: joshuaschmuck.Controllers.ProjectsController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: joshuaschmuck.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(joshuaschmuck || (joshuaschmuck = {}));
