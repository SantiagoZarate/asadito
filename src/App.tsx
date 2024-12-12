import { useEffect, useState } from "react";
import { jumboAPI } from "./api/jumbo/jumpo.api";
import { Container, Main, Section } from "./components/ui/craft";
import { formatMoney } from "./lib/formatMoney";
import { JumboItemDTO } from "./shared/dto/jumbo-item.dto";

export default function App() {
  const [items, setItems] = useState<JumboItemDTO[]>([]);

  useEffect(() => {
    jumboAPI.get({ query: "vacio" }).then(setItems);
  }, []);

  return (
    <Main>
      <Section>
        <Container className="grid grid-cols-3 place-items-center">
          <section className="col-span-2">
            <h1>El asado empieza acá</h1>
            <p>Calculá cuánto comprar según el hambre de tus invitados.</p>
          </section>
          <section className="">
            <span className="text-7xl">🥩</span>
            <span className="text-7xl">💲</span>
            <span className="text-7xl">🔥</span>
          </section>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Cortes de carne</h2>
          <ul className="flex flex-col *:p-2 *:flex *:justify-between *:items-center divide-y">
            {items.map((item, index) => (
              <li key={index}>
                <p className="lowercase first-letter:capitalize">{item.name}</p>
                <p>{formatMoney(item.price)}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </Main>
  );
}
