import { tesloApi } from '../api/tesloApi';
import { Product } from '../domain/entities/product';
import { ProductsResponse } from '../infrastructure/interfaces/product.response';
import { ProductMapper } from '../infrastructure/mappers/product.mapper';

export const getProductsByPage = async (
  page: number,
  limit: number = 20,
): Promise<Product[]> => {
  try {
    let url = '/products';

    if (page && limit) {
      const offset = (page - 1) * limit;
      url = `/products?page=${page}&limit=${limit}&offset=${offset}`;
    }
    const { data } = await tesloApi.get<ProductsResponse>(url);

    const products = data.map(ProductMapper.tesloProductToEntity);

    return products;
  } catch (error) {
    console.log(error, 'PRODUCTOS');
    throw new Error('No fue posible obtener los productos');
  }
};
