import { Route } from '@pawjs/pawjs/src/@types/route';

const AuthRoutes: Route[] = [
  {
    path: '/todo',
    exact: true,
    component: () => import('../components/login'),
    seo: {
      title: 'Auth | ReactPWA Demo',
      description: 'Implementing Auth with ReactPWA is simple. Check out this fake auth example for more details',
      image: LoginImage,
    },
  },

];

export default AuthRoutes;
