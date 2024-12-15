import { Container, Section } from '@/components/ui/craft';
import { useProductSelector } from '@/context/product/hooks';
import { formatMoney } from '@/lib/formatMoney';

export function Footer() {
  const items = useProductSelector((state) => state.items);

  const totalPrice = items.reduce(
    (acc, curr) => acc + curr.units * curr.price,
    0,
  );

  if (!items.length) {
    return null;
  }

  return (
    <Section className="fixed bottom-0 w-full p-1 sm:p-1 md:p-1 xl:p-1">
      <Container className="flex justify-between rounded-md border border-green-300 bg-green-50 font-semibold text-green-600 sm:p-2 xl:py-4">
        <p>Total</p>
        <p>{formatMoney(totalPrice)}</p>
      </Container>
    </Section>
  );
}
