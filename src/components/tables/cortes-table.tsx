import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatMoney } from "@/lib/formatMoney";
import { Input } from "../ui/input";
import { DrinkItem } from "./drinks-table";

interface Props {
  items: DrinkItem[];
  onChangeItemUnit: (id: string, value: number) => void;
}

export function CortesTable({ items, onChangeItemUnit }: Props) {
  const totalPrice = items.reduce(
    (acc, curr) => acc + curr.units * curr.price,
    0
  );
  const showTotal = items.length > 0;

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Corte</TableHead>
          <TableHead>Unidades</TableHead>
          <TableHead className="text-right">Precio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.name}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>
              <Input
                onChange={(e) =>
                  onChangeItemUnit(item.id, Number(e.currentTarget.value))
                }
                value={item.units}
                className="max-w-20"
                defaultValue={1}
                type="number"
                max={999}
              />
            </TableCell>
            <TableCell className="text-right">
              {formatMoney(item.units * item.price)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="w-full p-0">
        <TableRow>
          <TableCell colSpan={4} className="p-0">
            <footer data-enabled={showTotal} className="grid group *:p-2">
              <div className="[grid-area:1/-1] bg-green-50 group-data-[enabled=true]:opacity-100 opacity-0 flex justify-between text-green-600 font-semibold">
                <span>Total</span>
                <span>{formatMoney(totalPrice)}</span>
              </div>
              <div className="[grid-area:1/-1] group-data-[enabled=true]:opacity-0 flex justify-between">
                <span>No hay produtos añadidos</span>
              </div>
            </footer>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
