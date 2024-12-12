import { useEffect, useState } from "react";
import { jumboAPI } from "./api/jumbo/jumpo.api";
import { Container, Main, Section } from "./components/ui/craft";
import { JumboItemDTO } from "./shared/dto/jumbo-item.dto";

export default function App() {
  const [items, setItems] = useState<JumboItemDTO[]>([]);

  useEffect(() => {
    jumboAPI.get({ query: "entraña" }).then(setItems);
  }, []);

  return (
    <Main>
      <Section>
        <Container>
          <h1>Asadito</h1>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Items</h2>
          <ul className="flex flex-col *:p-2 *:flex *:justify-between *:items-center divide-y">
            {items.map((item, index) => (
              <li key={index}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </Main>
  );
}
