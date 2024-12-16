import { useProductSelector } from '@/context/product/hooks';
import { formatMoney } from '@/lib/formatMoney';
import { Container, Section } from '../ui/craft';

export function Receipt() {
  const meatItems = useProductSelector((state) => state.meat.items);

  return (
    <Section>
      <Container className="flex flex-col items-center justify-center gap-12">
        <section className="w-full max-w-[400px] p-6 shadow-lg">
          <section className="flex flex-col gap-4">
            <p className="font-semibold">Carne</p>
            <div className="flex flex-col gap-2">
              {meatItems.map((item) => (
                <article
                  className="flex flex-wrap items-center justify-between gap-4"
                  key={item.id}
                >
                  <div className="flex flex-col gap-1">
                    <p>{item.name}</p>
                    <p className="text-xs">
                      {item.grams} Gramos ({item.grams / 1000}KG)
                    </p>
                  </div>
                  <p>{formatMoney(item.price)}</p>
                </article>
              ))}
            </div>
          </section>
        </section>
        <button className="cursor-pointer rounded-xs bg-green-300 px-4 py-2 text-green-700">
          Compartir
        </button>
      </Container>
    </Section>
  );
}
