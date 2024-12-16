import { SectionHeader } from '@/components/ui/section-header';

export function LastStepSection() {
  return (
    <section>
      <SectionHeader
        description="El paso final, y el más importante, asegurate de modificar los precios si no coinciden con los de tus proovedores locales!"
        step={3}
        title="Comprar los productos y hacer el asado"
      />
    </section>
  );
}
