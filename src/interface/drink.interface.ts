export interface DrinkItem extends Item {
  units: number;
}

export type Item = {
  id: string;
  price: number;
  name: string;
};
