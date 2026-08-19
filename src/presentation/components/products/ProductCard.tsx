import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import { Product } from '../../../domain/entities/product';
import { Text } from '@ui-kitten/components';

interface ProductCardProps extends PropsWithChildren {
  product: Product;
}

const Styles = StyleSheet.create({});

const ProductCard = ({ product }: ProductCardProps): React.JSX.Element => {
  return <Text> {product.id}</Text>;
};
export default ProductCard;
