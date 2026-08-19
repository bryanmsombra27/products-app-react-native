import { Layout, List, Text } from '@ui-kitten/components';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import { Product } from '../../../domain/entities/product';
import ProductCard from './ProductCard';

interface ProductListProps extends PropsWithChildren {
  products: Product[];
}

const Styles = StyleSheet.create({});

const ProductList = ({ products }: ProductListProps): React.JSX.Element => {
  return (
    <List
      data={products}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      ListFooterComponent={() => <Layout style={{ height: 150 }} />}
    />
  );
};
export default ProductList;
