import { lazy } from 'react';

const routers = [
  {
    path: '/',
    component: lazy(() => import('@components/Homepage/Homepage')),
  },
  {
    path: '/blog',
    component: lazy(() => import('@components/Blogs/Blogs')),
  },
  {
    path: '/shop',
    component: lazy(() => import('@pages/OurShop/OurShop')),
  },
  // {
  //   path: '/cart',
  //   component: lazy(() => import('@pages/Cart/Cart')),
  // },
];

export default routers;
