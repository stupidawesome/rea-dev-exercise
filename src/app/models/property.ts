import {Agency} from './agency';

export class Property {

  constructor(
    public id: string,
    public price: string,
    public mainImage: string,
    public agency: Agency
  ) {}

  static create(data) {
    return new Property(data.id, data.price, data.mainImage, Agency.create(data.agency || {}));
  }

}
