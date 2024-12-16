import { HeroSection } from './components/sections/hero-section';
import { PeopleSection } from './components/sections/people-section';
import { ProductsSection } from './components/sections/products/products-section';
import { Container, Main, Section } from './components/ui/craft';

export default function App() {
  return (
    <Main>
      <HeroSection />
      <Section className="flex justify-center">
        <Container className="relative flex w-full flex-col gap-12 border-l border-dashed lg:mr-0 lg:ml-12 lg:py-0 lg:pl-10">
          <PeopleSection />
          <ProductsSection />
        </Container>
      </Section>
    </Main>
  );
}
