import { Container, Main, Section } from '@/components/ui/craft';
import { formatMoney } from '@/lib/formatMoney';
import { parseAsJson, useQueryState } from 'nuqs';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const itemSchema = z.object({
  name: z.string(),
  price: z.coerce.number(),
});

const schema = z.object({
  meatItems: z.array(
    itemSchema.extend({
      grams: z.coerce.number(),
    }),
  ),
  drinkItems: z.array(
    itemSchema.extend({
      units: z.coerce.number(),
    }),
  ),
  offalItems: z.array(
    itemSchema.extend({
      grams: z.coerce.number(),
    }),
  ),
});

export function SharePage() {
  const [json] = useQueryState('json', parseAsJson(schema.parse));

  if (!json) {
    return null;
  }

  const totalDrinkPrice = json?.drinkItems.reduce(
    (acc, curr) => acc + curr.units * curr.price,
    0,
  );

  const totalMeatPrice = json.meatItems.reduce(
    (acc, curr) => acc + (curr.grams / 1000) * curr.price,
    0,
  );

  const totalOffalPrice = json.offalItems.reduce(
    (acc, curr) => acc + (curr.grams / 1000) * curr.price,
    0,
  );

  const totalPrice = totalDrinkPrice + totalMeatPrice + totalOffalPrice;

  return (
    <Main>
      <Section>
        <Container className="flex flex-col gap-6">
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#20202012_1px,transparent_1px),linear-gradient(to_bottom,#20202012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(black,transparent)]"></div>
          <header className="flex flex-col gap-1">
            <Link className="text-sm" to={'/'}>
              Armar otro asado
            </Link>
            <h1>Resumen de los elementos del asado</h1>
          </header>
          {json!.meatItems.length > 0 && (
            <section>
              <p>Carne</p>
              <ul className="flex flex-col divide-y">
                {json?.meatItems.map((item) => (
                  <li className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <p>{item.name}</p>
                      <p className="text-xs">{item.grams}</p>
                    </div>
                    <p className="font-semibold">
                      {formatMoney((item.grams / 1000) * item.price)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {json.offalItems.length > 0 && (
            <section>
              <p>Achuras</p>
              <ul className="flex flex-col divide-y">
                {json?.offalItems.map((item) => (
                  <li className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <p>{item.name}</p>
                      <p className="text-xs">{item.grams}</p>
                    </div>
                    <p className="font-semibold">
                      {formatMoney((item.grams / 1000) * item.price)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {json.drinkItems.length > 0 && (
            <section>
              <p>Bebidas</p>
              <ul className="flex flex-col divide-y">
                {json?.drinkItems.map((item) => (
                  <li className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <p>{item.name}</p>
                      <p className="text-xs">{item.units} Unidades</p>
                    </div>
                    <p className="font-semibold">
                      {' '}
                      {formatMoney(item.units * item.price)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className="flex flex-wrap justify-between">
            <p>Total</p>
            <p className="font-bold">{formatMoney(totalPrice)}</p>
          </section>
        </Container>
      </Section>
    </Main>
  );
}
