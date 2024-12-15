import {
  useProductDispatch,
  useProductSelector,
} from '@/context/product/hooks';
import { updatePeopleCount } from '@/context/product/product-slice';
import { Container } from '../ui/craft';
import { Input } from '../ui/input';
import { SectionHeader } from '../ui/section-header';

export function PeopleSection() {
  const dispatch = useProductDispatch();
  const people = useProductSelector((state) => state.people);

  return (
    <Container className="flex flex-col gap-6">
      <SectionHeader
        description="Para calcular cuanto hay que poner por cabeza"
        title="Cuantos comensales vas a tener?"
      />
      <Input
        placeholder="8 personas"
        type="number"
        min={1}
        value={people}
        onChange={(e) =>
          dispatch(updatePeopleCount(Number(e.currentTarget.value)))
        }
      />
    </Container>
  );
}
