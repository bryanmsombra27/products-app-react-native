import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProductScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const ProductScreen = ({}: ProductScreenProps): React.JSX.Element => {
  return (
    <View>
      <Text> ProductScreen View Component </Text>
    </View>
  );
};
export default ProductScreen;
