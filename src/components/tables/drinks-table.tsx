import { jumboAPI } from '@/api/jumbo/jumpo.api';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BEBIDAS_INIT, InitItem } from '@/data/constants';
import { useState } from 'react';
import { Container } from '../ui/craft';
import { CortesTable } from './cortes-table';

export interface DrinkItem {
  name: string;
  price: number;
  units: number;
  id: string;
}

export function DrinksTable() {
  const [bebidas, setBebidas] = useState<InitItem[]>(BEBIDAS_INIT);
  const [items, setItems] = useState<DrinkItem[]>([]);

  const onSelectItem = async (id: string) => {
    const item = await jumboAPI.getById({ id: id });
    setItems((prevState) => {
      const chosenItem = bebidas.find((bebida) => bebida.id === id)!;
      setBebidas((state) => state.filter((b) => b.id !== id));
      return [
        ...prevState,
        {
          name: chosenItem?.name,
          id: chosenItem.id,
          price: item.price,
          units: 1,
        },
      ];
    });
  };

  const onChangeItemUnits = (id: string, value: number) => {
    setItems((prevState) => {
      // Si la cantidad es cero se elimina el producto de la lista
      if (value <= 0) {
      }

      return prevState.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          units: value,
        };
      });
    });
  };

  return (
    <Container>
      <header className="flex items-baseline justify-between bg-red-300">
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
      <CortesTable items={items} onChangeItemUnit={onChangeItemUnits} />
    </Container>
  );
}
