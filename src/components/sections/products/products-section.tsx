import { SectionDescription } from '@/components/ui/section/section-description';
import { DrinksSection } from '../drinks/drinks-section';
import { MeatSection } from '../meat/meat-section';
import { OffelSection } from '../offel/offel-section';

export function ProductsSection() {
  return (
    <section>
      <SectionDescription
        description="Los productos tienen precios sacados de Jumbo, igualmente poder editar el precio de cada producto en específico."
        title="Agrega los productos que vas a necesitar para el asado"
        step={2}
      />
      <MeatSection />
      <OffelSection />
      <DrinksSection />
    </section>
  );
}
