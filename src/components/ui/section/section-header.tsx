import { InitItem } from '@/data/constants';
import { Item } from '@/interface/drink.interface';
import { ComponentProps } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';

interface Props extends ComponentProps<typeof Select> {
  items: Item[];
  defaultItems: InitItem[];
  placeholder: string;
  title: string;
}

export function SectionHeader({
  onValueChange,
  items,
  placeholder,
  defaultItems,
  title,
}: Props) {
  return (
    <header className="flex flex-col flex-wrap items-baseline justify-between gap-2 *:min-w-fit sm:flex-row">
      <h2>{title}</h2>
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="sm:w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {defaultItems.map((bebida) => (
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
  );
}
