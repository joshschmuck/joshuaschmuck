var joshuaschmuck;
(function (joshuaschmuck) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = 'Hello from the home page!';
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var ProjectsController = (function () {
            function ProjectsController() {
            }
            return ProjectsController;
        }());
        Controllers.ProjectsController = ProjectsController;
        var AboutController = (function () {
            function AboutController() {
                this.center = { latitude: 48.083369, longitude: -121.969321 };
                this.zoom = 10;
                this.markers = [
                    {
                        id: 0,
                        options: {
                            title: 'Hometown',
                        },
                        latitude: 48.083369,
                        longitude: -122.121328
                    },
                ];
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        angular.module('joshuaschmuck').controller('AboutController', AboutController);
    })(Controllers = joshuaschmuck.Controllers || (joshuaschmuck.Controllers = {}));
})(joshuaschmuck || (joshuaschmuck = {}));
