import App from '@/App';
import { Footer } from '@/components/common/footer/footer';
import { Toaster } from '@/components/ui/sonner';
import { productsStore } from '@/context/product/products-store';
import { Provider } from 'react-redux';

export function HomePage() {
  return (
    <Provider store={productsStore}>
      <App />
      <Footer />
      <Toaster />
    </Provider>
  );
}
