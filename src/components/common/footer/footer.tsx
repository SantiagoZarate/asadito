import { Container, Section } from '@/components/ui/craft';
import { useProductSelector } from '@/context/product/hooks';
import { formatMoney } from '@/lib/formatMoney';

export function Footer() {
  const items = useProductSelector((state) => state.drinks.items);
  const people = useProductSelector((state) => state.people.people);

  const totalPrice = items.reduce(
    (acc, curr) => acc + curr.units * curr.price,
    0,
  );

  if (!items.length) {
    return null;
  }

  return (
    <Section className="fixed bottom-0 w-full p-1 sm:p-1 md:p-1 xl:p-1">
      <Container className="flex flex-col divide-y divide-green-300 rounded-md border border-green-300 bg-green-50 font-semibold text-green-600 sm:p-2 xl:py-4">
        <div className="flex justify-between gap-4">
          <p>Total</p>
          <p>{formatMoney(totalPrice)}</p>
        </div>
        <div className="flex justify-between gap-4">
          <p>Por cabeza</p>
          <p>{formatMoney(totalPrice / people)}</p>
        </div>
      </Container>
    </Section>
  );
}
