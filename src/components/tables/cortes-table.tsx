import { Item } from "@/App";
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

interface Props {
  items: Item[];
}

export function CortesTable({ items }: Props) {
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);
  const showTotal = items.length > 0;

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="bg-red-300">
          <TableHead>Corte</TableHead>
          <TableHead>Gramos</TableHead>
          <TableHead className="text-right">Precio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.name}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.grams}</TableCell>
            <TableCell className="text-right">
              {formatMoney(item.price)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className=" bg-red-100 w-full">
        <TableRow>
          <TableCell colSpan={4}>
            <footer data-enabled={showTotal} className="grid group">
              <div className="[grid-area:1/-1] group-data-[enabled=true]:opacity-100 opacity-0 flex justify-between">
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
