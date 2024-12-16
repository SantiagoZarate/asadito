import { Container, Section } from '../../ui/craft';
import './hero.css';

export function HeroSection() {
  return (
    <Section className="hero group relative">
      <Container className="relative z-10 flex items-center justify-center py-28 lg:py-28">
        <section className="flex flex-col items-center">
          <h1 className="font-black">El asado empieza acá</h1>
          <p>Calculá cuánto comprar según el hambre de tus invitados.</p>
        </section>
        <span className="steak text-7xl">🥩</span>
        <span className="money text-7xl">💲</span>
        <span className="fire text-7xl">🔥</span>
      </Container>
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#20202012_1px,transparent_1px),linear-gradient(to_bottom,#20202012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(black,transparent)]"></div>
    </Section>
  );
}
