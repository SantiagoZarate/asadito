import { JumboResponse } from "@/interface/jumbo.interface";
import { JumpoAPI } from ".";
import { jumpoResponseMapper } from "./mapper";

const URL = "/api/jumbo";

const jumboAPI: JumpoAPI = {
  async get({ query }) {
    return fetch(URL + "?ft=" + query)
      .then((response) => {
        if (!response.ok)
          throw new Error("Error al obtener productos de Jumbo");

        return response.json();
      })
      .then((response: JumboResponse[]) =>
        response.map((r) => jumpoResponseMapper(r))
      );
  },
  async getById({ id }) {
    return fetch(URL + "?fq=skuId:" + id)
      .then((response) => {
        if (!response.ok)
          throw new Error("Error al obtener productos de Jumbo");

        return response.json();
      })
      .then((response: JumboResponse[]) => jumpoResponseMapper(response[0]));
  },
};

export { jumboAPI };
