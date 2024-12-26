import { useProductSelector } from '@/context/product/hooks';
import { forwardRef } from 'react';
import { toast } from 'sonner';
import { Container, Section } from '../ui/craft';
import { Receipt } from './receipt';

export const ReceiptSection = forwardRef<HTMLElement, {}>((_, ref) => {
  const meatItems = useProductSelector((state) => state.meat.items);
  const drinkItems = useProductSelector((state) => state.drinks.items);
  const offalItems = useProductSelector((state) => state.offel.items);

  return (
    <Section ref={ref}>
      <Container className="flex flex-col items-center justify-center gap-12">
        <Receipt />
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
});

ReceiptSection.displayName = 'ReceiptSection';
