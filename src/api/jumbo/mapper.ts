import { JumboResponse } from '@/interface/jumbo.interface';
import { JumboItemDTO } from '@/shared/dto/jumbo-item.dto';

export function jumpoResponseMapper(data: JumboResponse): JumboItemDTO {
  console.log({ data });

  return {
    name: data.productTitle,
    price: data.items[0].sellers[0].commertialOffer.Price,
  };
}
