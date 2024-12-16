import { jumboAPI } from '@/api/jumbo/jumpo.api';
import { SausageIcon } from '@/components/icons/sausage-icon';
import { SectionHeader } from '@/components/ui/section/section-header';
import { SectionPlaceholder } from '@/components/ui/section/section-placeholder';
import {
  useProductDispatch,
  useProductSelector,
} from '@/context/product/hooks';
import { addItem } from '@/context/product/offel/offer-slice';
import { OFFAL_INIT } from '@/data/constants';
import { toast } from 'sonner';
import { OffalTable } from './offal-table';

export function OffelSection() {
  const items = useProductSelector((state) => state.offel.items);
  const dispatch = useProductDispatch();

  const onSelectItem = (id: string) => {
    const chosenItem = OFFAL_INIT.find((bebida) => bebida.id === id)!;

    jumboAPI.getById({ id: id }).then((response) => {
      dispatch(
        addItem({
          name: chosenItem?.name,
          price: response.price,
          id: chosenItem.id,
          grams: 400,
        }),
      );
      toast('Item añadido');
    });
  };

  return (
    <section>
      <SectionHeader
        onValueChange={onSelectItem}
        placeholder="Agregar achura"
        defaultItems={OFFAL_INIT}
        title="Achuras"
        items={items}
      />
      {items.length ? (
        <OffalTable />
      ) : (
        <SectionPlaceholder
          text="Agrega achuras para ir picando"
          icon={<SausageIcon />}
        />
      )}
    </section>
  );
}
