import {Product} from './product';
import {User} from './user';
export class Transaction {
  id:number = 0;
  product: Product | undefined;
  user: User | undefined;
  purchaseDate: any;
}
