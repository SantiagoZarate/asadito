import { Container, Section } from '@/components/ui/craft';
import { useProductSelector } from '@/context/product/hooks';
import { formatMoney } from '@/lib/formatMoney';
import { motion } from 'motion/react';
import { footerAnimation } from './animation';

export function Footer({ isInView }: { isInView: boolean }) {
  const drinkItems = useProductSelector((state) => state.drinks.items);
  const meatItems = useProductSelector((state) => state.meat.items);
  const offalItems = useProductSelector((state) => state.offel.items);
  const people = useProductSelector((state) => state.people.people);

  const totalDrinkPrice = drinkItems.reduce(
    (acc, curr) => acc + curr.units * curr.price,
    0,
  );

  const totalMeatPrice = meatItems.reduce(
    (acc, curr) => acc + (curr.grams / 1000) * curr.price,
    0,
  );

  const totalOffalPrice = offalItems.reduce(
    (acc, curr) => acc + (curr.grams / 1000) * curr.price,
    0,
  );

  const totalPrice = totalDrinkPrice + totalMeatPrice + totalOffalPrice;

  const totalMeatKilograms = meatItems.reduce(
    (acc, curr) => acc + curr.grams / 1000,
    0,
  );

  if (!totalPrice) {
    return null;
  }

  return (
    <Section className="fixed bottom-0 w-full p-1 sm:p-1 md:p-1 xl:p-1">
      <Container>
        <motion.footer
          className="flex flex-col divide-y divide-green-300 rounded-md border border-green-300 bg-green-50 text-sm font-semibold text-green-600 sm:p-2 xl:py-4"
          animate={isInView ? 'hidden' : 'visible'}
          variants={footerAnimation}
          initial="hidden"
        >
          <div className="flex justify-between gap-4">
            <p>Total</p>
            <p>{formatMoney(totalPrice)}</p>
          </div>
          <div className="flex justify-between gap-4">
            <p>Por cabeza</p>
            <p>{formatMoney(totalPrice / people)}</p>
          </div>
          {meatItems.length ? (
            <div
              data-low-grams={totalMeatKilograms / people < 0.4}
              className="group flex flex-col data-[low-grams=true]:text-yellow-500"
            >
              <div className="flex justify-between gap-4">
                <p>Kg de carne por cabeza (Sin contar achuras)</p>
                <p>{(totalMeatKilograms / people).toFixed(3)}kg</p>
              </div>
              <footer className="opacity-0 group-data-[low-grams=true]:opacity-100">
                <p className="text-xs text-yellow-800">
                  Parece que a tu asado le falta un poco de carne (0.4 - 0.7kg
                  en promedio por persona)
                </p>
              </footer>
            </div>
          ) : null}
        </motion.footer>
      </Container>
    </Section>
  );
}
