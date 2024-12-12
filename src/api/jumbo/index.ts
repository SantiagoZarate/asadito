import { JumboItemDTO } from "@/shared/dto/jumbo-item.dto";

type GetOptions = {
  query?: string;
};

export interface JumpoAPI {
  get(options: GetOptions): Promise<JumboItemDTO[]>;
}
