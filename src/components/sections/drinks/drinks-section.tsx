import { jumboAPI } from '@/api/jumbo/jumpo.api';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  useProductDispatch,
  useProductSelector,
} from '@/context/product/hooks';
import { addItem } from '@/context/product/product-slice';
import { BEBIDAS_INIT } from '@/data/constants';
import { toast } from 'sonner';
import { DrinksPlaceholder } from './drinks-placeholder';
import { DrinksTable } from './drinks-table';

export function DrinksSection() {
  const items = useProductSelector((state) => state.items);
  const dispatch = useProductDispatch();

  const onSelectItem = (id: string) => {
    const chosenItem = BEBIDAS_INIT.find((bebida) => bebida.id === id)!;

    jumboAPI.getById({ id: id }).then((response) => {
      dispatch(
        addItem({
          name: chosenItem?.name,
          price: response.price,
          id: chosenItem.id,
          units: 1,
        }),
      );
      toast('Item añadido');
    });
  };

  return (
    <section>
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
      {items.length ? <DrinksTable /> : <DrinksPlaceholder />}
    </section>
  );
}
