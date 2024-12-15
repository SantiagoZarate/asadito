import { HeroSection } from './components/sections/hero-section';
import { PeopleSection } from './components/sections/people-section';
import { DrinksTable } from './components/tables/drinks-table';
import { Main, Section } from './components/ui/craft';

export default function App() {
  return (
    <Main>
      <HeroSection />
      <PeopleSection />
      <Section>
        <DrinksTable />
      </Section>
    </Main>
  );
}
