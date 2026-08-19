import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyIcon from '../../components/ui/MyIcon';
import { useAuthStore } from '../../store/useAuthStore';
import MainLayout from '../../layouts/MainLayout';
import useGetProducts from '../../hooks/useGetProducts';
import FullScreenLoader from '../../components/ui/FullScreenLoader';
import ProductList from '../../components/products/ProductList';

interface HomeScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const HomeScreen = ({}: HomeScreenProps): React.JSX.Element => {
  const { data = [], error, isPending } = useGetProducts(1);

  return (
    <MainLayout
      title="TesloShop - Productos"
      subTitle="Aplicación administrativa"
    >
      {isPending ? <FullScreenLoader /> : <ProductList products={data} />}
    </MainLayout>
  );
};
export default HomeScreen;
