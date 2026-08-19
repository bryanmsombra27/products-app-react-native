import { TesloProduct } from '../../infrastructure/interfaces/product.response';

export interface Product extends Omit<TesloProduct, 'user'> {}
