import { HomePage } from '@/pages/home/home-page';
import { SharePage } from '@/pages/share/share-page';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/share',
    element: <SharePage />,
  },
];
export default createBrowserRouter(mainRouter);
