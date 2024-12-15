import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import App from './App.tsx';
import { Footer } from './components/common/footer/footer.tsx';
import { productsStore } from './context/product/products-store.ts';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={productsStore}>
      <App />
      <Footer />
    </Provider>
    <Toaster />
  </StrictMode>,
);
