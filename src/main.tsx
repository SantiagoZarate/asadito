import { NuqsAdapter } from 'nuqs/adapters/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import mainRouter from './router/main-router';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <RouterProvider router={mainRouter} />
    </NuqsAdapter>
  </StrictMode>,
);
