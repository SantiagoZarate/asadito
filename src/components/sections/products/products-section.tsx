import { Container, Section } from '@/components/ui/craft';
import { SectionHeader } from '@/components/ui/section-header';
import { DrinksSection } from '../drinks/drinks-section';
import { MeatSection } from '../meat/meat-section';

export function ProductsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          description="Los productos tienen precios sacados de Jumbo, igualmente poder editar el precio de cada producto en específico."
          title="Agrega los productos que vas a necesitar para el asado"
        />
        <MeatSection />
        <DrinksSection />
      </Container>
    </Section>
  );
}
