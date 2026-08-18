import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { StackNavigator } from './presentation/navigation/StackNavigation';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@ui-kitten/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

interface ProductsAppProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const ProductsApp = ({}: ProductsAppProps): React.JSX.Element => {
  const colorScheme = useColorScheme();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider
        {...eva}
        theme={colorScheme == 'light' ? eva.light : eva.dark}
      >
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default ProductsApp;
