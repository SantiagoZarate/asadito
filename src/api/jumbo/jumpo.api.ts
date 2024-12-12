import { JumboResponse } from "@/interface/jumbo.interface";
import { JumpoAPI } from ".";
import { jumpoResponseMapper } from "./mapper";

const URL = "/api/jumbo?ft=";

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
