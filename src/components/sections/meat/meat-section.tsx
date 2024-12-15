import { useProductSelector } from '@/context/product/hooks';
import { CORTES_INIT } from '@/data/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';

export function MeatSection() {
  const items = useProductSelector((state) => state.meat.items);

  const onSelectItem = (value: string) => {
    console.log({ value });
  };

  return (
    <section>
      <header className="flex items-baseline justify-between">
        <h2>Cortes de carne</h2>
        <Select onValueChange={onSelectItem}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Agregar bebida" />
          </SelectTrigger>
          <SelectContent>
            {CORTES_INIT.map((bebida) => (
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
    </section>
  );
}
