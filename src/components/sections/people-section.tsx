import {
  useProductDispatch,
  useProductSelector,
} from '@/context/product/hooks';
import { updatePeopleCount } from '@/context/product/product-slice';
import { Container } from '../ui/craft';
import { Input } from '../ui/input';

export function PeopleSection() {
  const dispatch = useProductDispatch();
  const people = useProductSelector((state) => state.people);

  return (
    <Container className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="font-semibold">Cuantos comensales vas a tener?</p>
        <span className="text-sm">Calcula cuanto hay que poner por cabeza</span>
      </header>
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
