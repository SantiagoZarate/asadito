import { BeerIcon } from '../../icons/beer-icon';
import { Container } from '../../ui/craft';

export function DrinksPlaceholder() {
  return (
    <Container className="flex flex-col items-center justify-center gap-2">
      <BeerIcon />
      <p className="font-semibold">Añade bebidas a tu asado</p>
    </Container>
  );
}
