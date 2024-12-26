import {
  useProductDispatch,
  useProductSelector,
} from '@/context/product/hooks';
import { updatePeopleCount } from '@/context/product/people/people-slice';
import { Input } from '../ui/input';
import { SectionDescription } from '../ui/section/section-description';

export function PeopleSection() {
  const dispatch = useProductDispatch();
  const people = useProductSelector((state) => state.people.people);

  return (
    <section className="flex flex-col flex-wrap gap-6">
      <SectionDescription
        description="Para calcular cuanto hay que poner por cabeza"
        title="Cuantos comensales vas a tener?"
        step={1}
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
    </section>
  );
}
