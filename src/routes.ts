// import AuthRoutes from './pages/auth';
// import GuestRoutes from './pages/guest';
// import MainRoutes from './pages/main'
import RouteHandler from '@pawjs/pawjs/src/router/handler';
import SplashScreen from './pages/splash';

export default class Routes {
  apply(routeHandler: RouteHandler) {
    const routes = [
      // ...GuestRoutes,
      // ...AuthRoutes,
      ...SplashScreen,
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      // Perform any async action before adding routes to the application
      routeHandler.addRoutes(routes);
    });
  }
}
