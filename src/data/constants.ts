import { productIds } from "@/api/jumbo/product-id-mapper";

export const BEBIDAS_INIT = [
  {
    name: "Fernet",
    id: productIds.fernet,
  },
  {
    name: "Coca Cola 2.25lt",
    id: productIds.cocaCola,
  },
  {
    name: "Chandon",
    id: productIds.chandon,
  },
  {
    name: "Skyy",
    id: productIds.skyy,
  },
  {
    name: "Speed",
    id: productIds.speed,
  },
];

export type InitItem = (typeof BEBIDAS_INIT)[number];
