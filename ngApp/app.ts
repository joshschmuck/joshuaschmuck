namespace joshuaschmuck {

    angular.module('joshuaschmuck', ['ui.router', 'ngResource', 'ui.bootstrap', 'uiGmapgoogle-maps']).config((
        uiGmapGoogleMapApiProvider: any,
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
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

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
