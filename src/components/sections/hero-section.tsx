import { Container, Section } from '../ui/craft';

export function HeroSection() {
  return (
    <Section>
      <Container className="grid grid-cols-3 place-content-center">
        <section className="col-span-2">
          <h1 className="font-black">El asado empieza acá</h1>
          <p>Calculá cuánto comprar según el hambre de tus invitados.</p>
        </section>
        <section className="">
          <span className="text-7xl">🥩</span>
          <span className="text-7xl">💲</span>
          <span className="text-7xl">🔥</span>
        </section>
      </Container>
    </Section>
  );
}
