import { DrinksTable } from './components/tables/drinks-table';
import { Container, Main, Section } from './components/ui/craft';

export interface Item {
  name: string;
  price: number;
  grams: number;
}

export default function App() {
  return (
    <Main>
      <Section>
        <Container className="grid grid-cols-3 place-items-center">
          <section className="col-span-2">
            <h1>El asado empieza acá</h1>
            <p>Calculá cuánto comprar según el hambre de tus invitados.</p>
          </section>
          <section className="">
            <span className="text-7xl">🥩</span>
            <span className="text-7xl">💲</span>
            <span className="text-7xl">🔥</span>
          </section>
        </Container>
      </Section>
      <Section>
        <DrinksTable />
      </Section>
    </Main>
  );
}
