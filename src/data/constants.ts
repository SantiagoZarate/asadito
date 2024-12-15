import { drinksIds, meatIds } from '@/api/jumbo/product-id-mapper';

export const CORTES_INIT = [
  {
    name: 'Vacío',
    id: meatIds.vacio,
  },
  {
    name: 'Matambre',
    id: meatIds.matambre,
  },
  {
    name: 'Colita de Cuadril',
    id: meatIds.colitaDeCuadril,
  },
];

export const BEBIDAS_INIT = [
  {
    name: 'Fernet',
    id: drinksIds.fernet,
  },
  {
    name: 'Coca Cola 2.25lt',
    id: drinksIds.cocaCola,
  },
  {
    name: 'Chandon',
    id: drinksIds.chandon,
  },
  {
    name: 'Skyy',
    id: drinksIds.skyy,
  },
  {
    name: 'Speed',
    id: drinksIds.speed,
  },
];

export type InitItem = (typeof BEBIDAS_INIT)[number];
