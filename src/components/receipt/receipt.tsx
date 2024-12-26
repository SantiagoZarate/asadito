import { useProductSelector } from '@/context/product/hooks';
import { formatMoney } from '@/lib/formatMoney';
import { PropsWithChildren } from 'react';

export function Receipt() {
  const meatItems = useProductSelector((state) => state.meat.items);
  const drinkItems = useProductSelector((state) => state.drinks.items);
  const offalItems = useProductSelector((state) => state.offel.items);

  return (
    <section className="mx-auto flex w-full max-w-[400px] flex-col divide-y p-6 shadow-lg [&>*:not(last-child)]:pb-4">
      <ReceiptSubtitle title="Carne">
        {meatItems.map((item) => (
          <ReceiptItem
            detail={`${item.grams} Gramos (${item.grams / 1000}KG)`}
            price={item.price * (item.grams / 1000)}
            name={item.name}
          />
        ))}
      </ReceiptSubtitle>
      <ReceiptSubtitle title="Achuras">
        {offalItems.map((item) => (
          <ReceiptItem
            detail={`${item.grams} Gramos (${item.grams / 1000}KG)`}
            price={item.price * (item.grams / 1000)}
            name={item.name}
          />
        ))}
      </ReceiptSubtitle>
      <ReceiptSubtitle title="Bebidas">
        {drinkItems.map((item) => (
          <ReceiptItem
            detail={`${item.units} Unidades`}
            name={item.name}
            price={item.price * item.units}
          />
        ))}
      </ReceiptSubtitle>
    </section>
  );
}

interface SubtitleProps extends PropsWithChildren {
  title: string;
}

export function ReceiptSubtitle({ title, children }: SubtitleProps) {
  return (
    <section className="flex flex-col gap-4">
      <p className="font-semibold capitalize">{title}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}

interface ItemProps {
  name: string;
  price: number;
  detail: JSX.Element | string;
}

export function ReceiptItem({ name, price, detail }: ItemProps) {
  return (
    <article className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <p>{name}</p>
        <p className="text-xs">{detail}</p>
      </div>
      <p>{formatMoney(price)}</p>
    </article>
  );
}
