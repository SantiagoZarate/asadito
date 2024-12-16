import { HomePage } from '@/pages/home/home-page';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];
export default createBrowserRouter(mainRouter);
