import { useProductSelector } from '@/context/product/hooks';
import { formatMoney } from '@/lib/formatMoney';
import { toast } from 'sonner';
import { Container, Section } from '../ui/craft';

export function Receipt() {
  const meatItems = useProductSelector((state) => state.meat.items);
  const drinkItems = useProductSelector((state) => state.drinks.items);
  const offalItems = useProductSelector((state) => state.offel.items);

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
        <button
          onClick={() => {
            const stringifiedMeatItems = JSON.stringify(
              meatItems.map((m) => ({
                grams: m.grams,
                price: m.price,
                name: m.name,
              })),
            );

            const stringifiedDrinkItems = JSON.stringify(
              drinkItems.map((m) => ({
                units: m.units,
                price: m.price,
                name: m.name,
              })),
            );

            const stringifiedOffalItems = JSON.stringify(
              offalItems.map((m) => ({
                grams: m.grams,
                price: m.price,
                name: m.name,
              })),
            );

            navigator.clipboard.writeText(
              window.location.origin +
                '/share?json={"meatItems":' +
                stringifiedMeatItems +
                ',"drinkItems":' +
                stringifiedDrinkItems +
                ',"offalItems":' +
                stringifiedOffalItems +
                '}',
            );

            toast('Link copiado al portapapeles! compartilo con tus amigos');
          }}
          className="cursor-pointer rounded-xs bg-green-300 px-4 py-2 text-green-700 transition hover:bg-green-400 active:translate-y-1"
        >
          Compartir
        </button>
      </Container>
    </Section>
  );
}
