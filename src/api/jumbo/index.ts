import { JumboItemDTO } from "@/shared/dto/jumbo-item.dto";

type GetOptions = {
  query?: string;
};

type GetByIdOptions = {
  id: string;
};

export interface JumpoAPI {
  get(options: GetOptions): Promise<JumboItemDTO[]>;
  getById(options: GetByIdOptions): Promise<JumboItemDTO>;
}
