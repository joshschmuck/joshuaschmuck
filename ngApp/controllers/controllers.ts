namespace joshuaschmuck.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class ProjectsController {

    }


    export class AboutController {
      public center = { latitude: 48.083369, longitude: -121.969321};
      public zoom = 10;
      public markers = [
          {
              id: 0,
              options: {
                  title: 'Hometown',
              },
              latitude: 48.083369,
              longitude: -122.121328
          },
      ]
    }
    angular.module('joshuaschmuck').controller('AboutController', AboutController);
}
