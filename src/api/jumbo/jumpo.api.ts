import { JumboResponse } from "@/interface/jumbo.interface";
import { JumpoAPI } from ".";
import { jumpoResponseMapper } from "./mapper";

const URL =
  "https://www.jumbo.com.ar/api/catalog_system/pub/products/search/?ft=";

const jumboAPI: JumpoAPI = {
  async get({ query }) {
    return fetch(URL + query)
      .then((response) => {
        if (!response.ok)
          throw new Error("Error al obtener productos de Jumbo");

        return response.json();
      })
      .then((response: JumboResponse[]) =>
        response.map((r) => jumpoResponseMapper(r))
      );
  },
};

export { jumboAPI };
