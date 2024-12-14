import { jumboAPI } from '@/api/jumbo/jumpo.api';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BEBIDAS_INIT } from '@/data/constants';
import { useState } from 'react';
import { toast } from 'sonner';
import { Container } from '../ui/craft';
import { CortesTable } from './cortes-table';

export interface DrinkItem {
  name: string;
  price: number;
  units: number;
  id: string;
}

export function DrinksTable() {
  const [items, setItems] = useState<DrinkItem[]>([]);

  const onSelectItem = (id: string) => {
    const chosenItem = BEBIDAS_INIT.find((bebida) => bebida.id === id)!;

    jumboAPI.getById({ id: id }).then((response) => {
      setItems((prevState) => {
        return [
          ...prevState,
          {
            name: chosenItem?.name,
            price: response.price,
            id: chosenItem.id,
            units: 1,
          },
        ];
      });
      toast('Item añadido');
    });
  };

  const onChangeItemUnits = (id: string, value: number) => {
    setItems((prevState) => {
      // Si la cantidad es cero se elimina el producto de la lista
      if (value <= 0) {
        toast('Item eliminado');
        return prevState.filter((items) => items.id !== id);
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

  const onChangeItemPrice = (id: string, newPrice: number) => {
    setItems((prevState) =>
      // Si la cantidad es cero se elimina el producto de la lista
      prevState.map((item) =>
        item.id !== id
          ? item
          : {
              ...item,
              price: newPrice,
            },
      ),
    );
  };

  const onDeleteItem = (id: string) => {
    setItems((prevState) => prevState.filter((p) => p.id !== id));
    toast('Item eliminado');
  };

  return (
    <Container>
      <header className="flex items-baseline justify-between">
        <h2>Bebidas</h2>
        <Select onValueChange={onSelectItem}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Agregar bebida" />
          </SelectTrigger>
          <SelectContent>
            {BEBIDAS_INIT.map((bebida) => (
              <SelectItem
                disabled={!!items.find((i) => i.id === bebida.id)}
                value={bebida.id}
              >
                {bebida.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </header>
      <CortesTable
        onChangeItemPrice={onChangeItemPrice}
        onChangeItemUnit={onChangeItemUnits}
        onDeleteItem={onDeleteItem}
        items={items}
      />
    </Container>
  );
}
