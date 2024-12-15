import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useProductDispatch,
  useProductSelector,
} from '@/context/product/hooks';
import {
  deleteItem,
  updateItemPrice,
  updateItemUnits,
} from '@/context/product/product-slice';
import { formatMoney } from '@/lib/formatMoney';
import { toast } from 'sonner';
import { MarkMicroIcon } from '../../icons/mark-micro-icon';
import { Input } from '../../ui/input';

export function DrinksTable() {
  const items = useProductSelector((state) => state.items);
  const dispatch = useProductDispatch();
  const totalPrice = items.reduce(
    (acc, curr) => acc + curr.units * curr.price,
    0,
  );
  const showTotal = items.length > 0;

  const onDeleteItem = (id: string) => {
    dispatch(deleteItem(id));
    toast('Item eliminado');
  };

  const onChangeItemUnits = (id: string, value: number) => {
    // Si la cantidad es cero se elimina el producto de la lista
    if (value <= 0) {
      toast('Item eliminado');
      dispatch(deleteItem(id));
    }
    dispatch(updateItemUnits({ id, newUnits: value }));
  };

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Corte</TableHead>
          <TableHead>Unidades</TableHead>
          <TableHead>Precio por unidad</TableHead>
          <TableHead className="text-right">Precio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.name} className="group">
            <TableCell className="font-medium">
              <button
                className="mr-2 cursor-pointer rounded-md border bg-secondary p-1 transition"
                onClick={() => onDeleteItem(item.id)}
              >
                <MarkMicroIcon />
              </button>
              {item.name}
            </TableCell>
            <TableCell>
              <Input
                onChange={(e) =>
                  onChangeItemUnits(item.id, Number(e.currentTarget.value))
                }
                value={item.units}
                type="number"
              />
            </TableCell>
            <TableCell>
              <Input
                onChange={(e) =>
                  dispatch(
                    updateItemPrice({
                      newPrice: Number(e.currentTarget.value),
                      id: item.id,
                    }),
                  )
                }
                value={item.price}
                type="number"
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
            <footer data-enabled={showTotal} className="group grid *:p-2">
              <div className="flex justify-between bg-green-50 font-semibold text-green-600 opacity-0 [grid-area:1/-1] group-data-[enabled=true]:opacity-100">
                <span>Total Bebidas</span>
                <span>{formatMoney(totalPrice)}</span>
              </div>
              <div className="flex justify-between [grid-area:1/-1] group-data-[enabled=true]:opacity-0">
                <span>No hay produtos añadidos</span>
              </div>
            </footer>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
