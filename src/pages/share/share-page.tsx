import { Container, Main, Section } from '@/components/ui/craft';
import { parseAsJson, useQueryState } from 'nuqs';
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

  console.log({
    json,
  });

  if (!json) {
    return null;
  }

  return (
    <Main>
      <Section>
        <Container className="flex flex-col gap-6">
          <h1>Shared page</h1>
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
                      {(item.grams / 1000) * item.price}
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
                      {(item.grams / 1000) * item.price}
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
                    <p className="font-semibold">{item.units * item.price}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </Container>
      </Section>
    </Main>
  );
}
