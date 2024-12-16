import { drinksIds, meatIds, offalIds } from '@/api/jumbo/product-id-mapper';

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

export const OFFAL_INIT = [
  {
    name: 'Morcilla',
    id: offalIds.morcilla,
  },
  {
    name: 'Chinchulin',
    id: offalIds.chinchulin,
  },
  {
    name: 'Molleja',
    id: offalIds.molleja,
  },
  {
    name: 'Chorizo',
    id: offalIds.chorizo,
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
