import { Footer } from '@/components/common/footer/footer';
import { ReceiptSection } from '@/components/receipt/receipt-section';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { LastStepSection } from '@/components/sections/last-step/last-step-section';
import { PeopleSection } from '@/components/sections/people-section';
import { ProductsSection } from '@/components/sections/products/products-section';
import { Container, Main, Section } from '@/components/ui/craft';
import { Toaster } from '@/components/ui/sonner';
import { productsStore } from '@/context/product/products-store';
import { Provider } from 'react-redux';

export function HomePage() {
  return (
    <Provider store={productsStore}>
      <Main className="pb-20">
        <HeroSection />
        <Section className="flex justify-center">
          <Container className="relative flex w-full flex-col gap-12 border-l border-dashed lg:mr-0 lg:ml-12 lg:py-0 lg:pl-10">
            <PeopleSection />
            <ProductsSection />
            <LastStepSection />
          </Container>
        </Section>
        <ReceiptSection />
      </Main>
      <Footer />
      <Toaster />
    </Provider>
  );
}
