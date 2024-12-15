import { HeroSection } from './components/sections/hero-section';
import { PeopleSection } from './components/sections/people-section';
import { ProductsSection } from './components/sections/products/products-section';
import { Main } from './components/ui/craft';

export default function App() {
  return (
    <Main>
      <HeroSection />
      <PeopleSection />
      <ProductsSection />
    </Main>
  );
}
