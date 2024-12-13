import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { jumboAPI } from "./api/jumbo/jumpo.api";
import { CortesTable } from "./components/tables/cortes-table";
import { Container, Main, Section } from "./components/ui/craft";
import { BEBIDAS_INIT, InitItem } from "./data/constants";

export interface Item {
  name: string;
  price: number;
  grams: number;
}

export default function App() {
  const [bebidas, setBebidas] = useState<InitItem[]>(BEBIDAS_INIT);
  const [items, setItems] = useState<Item[]>([]);

  const onSelectItem = async (id: string) => {
    const item = await jumboAPI.getById({ id: id });
    setItems((prevState) => {
      const chosenItem = bebidas.find((bebida) => bebida.id === id)!;
      setBebidas((state) => state.filter((b) => b.id !== id));
      return [
        ...prevState,
        {
          grams: 100,
          name: chosenItem?.name,
          price: item.price,
        },
      ];
    });
  };

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
          <header className="flex justify-between items-baseline">
            <h2>Bebidas</h2>
            <Select onValueChange={onSelectItem}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Agregar bebida" />
              </SelectTrigger>
              <SelectContent>
                {bebidas.map((bebida) => (
                  <SelectItem value={bebida.id}>{bebida.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </header>
          <CortesTable items={items} />
        </Container>
      </Section>
    </Main>
  );
}
