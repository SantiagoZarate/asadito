import { jumboAPI } from '@/api/jumbo/jumpo.api';
import { GrillIcon } from '@/components/icons/grill-icon';
import { SectionPlaceholder } from '@/components/ui/section/section-placeholder';
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
import { addItem } from '@/context/product/meat/meat-slice';
import { CORTES_INIT } from '@/data/constants';
import { toast } from 'sonner';
import { MeatTable } from './meat-table';

export function MeatSection() {
  const items = useProductSelector((state) => state.meat.items);
  const dispatch = useProductDispatch();

  const onSelectItem = (id: string) => {
    const chosenItem = CORTES_INIT.find((bebida) => bebida.id === id)!;

    jumboAPI.getById({ id: id }).then((response) => {
      dispatch(
        addItem({
          name: chosenItem?.name,
          price: response.price,
          id: chosenItem.id,
          grams: 1000,
        }),
      );
      toast('Item añadido');
    });
  };

  return (
    <section>
      <header className="flex items-baseline justify-between">
        <h2>Cortes de carne</h2>
        <Select onValueChange={onSelectItem}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Agregar Corte" />
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
      {items.length ? (
        <MeatTable />
      ) : (
        <SectionPlaceholder
          icon={<GrillIcon />}
          text="Agrega cortes de carne para el asado"
        />
      )}
    </section>
  );
}
