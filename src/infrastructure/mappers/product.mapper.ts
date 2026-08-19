import { APIURL } from '../../api/tesloApi';
import { Product } from '../../domain/entities/product';
import { TesloProduct } from '../interfaces/product.response';

export class ProductMapper {
  static tesloProductToEntity(tesloProduct: TesloProduct): Product {
    return {
      id: tesloProduct.id,
      description: tesloProduct.description,
      gender: tesloProduct.gender,
      images: tesloProduct.images.map(
        image => `${APIURL}/files/product/${image}`,
      ),
      price: tesloProduct.price,
      sizes: tesloProduct.sizes,
      slug: tesloProduct.slug,
      stock: tesloProduct.stock,
      tags: tesloProduct.tags,
      title: tesloProduct.title,
    };
  }
}
