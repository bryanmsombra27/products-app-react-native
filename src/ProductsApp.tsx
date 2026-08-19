import {
  NavigationContainer,
  // useTheme as rnUseTheme,
} from '@react-navigation/native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { StackNavigator } from './presentation/navigation/StackNavigation';
import {
  ApplicationProvider,
  IconRegistry,
  useTheme,
} from '@ui-kitten/components';
import * as eva from '@ui-kitten/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AuthProvider from './presentation/providers/AuthProvider';

interface ProductsAppProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const ProductsApp = ({}: ProductsAppProps): React.JSX.Element => {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  // const rnTheme = rnUseTheme();
  const backgroundColor =
    colorScheme == 'dark' ? theme['color-basic-800'] : theme['color-basic-100'];
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider
        {...eva}
        theme={colorScheme == 'light' ? eva.light : eva.dark}
      >
        <NavigationContainer
          theme={{
            dark: colorScheme == 'dark',
            colors: {
              primary: theme['color-primary-500'],
              background: backgroundColor,
              card: theme['color-basic-100'],
              text: theme['text-basic-color'],
              border: theme['color-basic-800'],
              notification: theme['color-primary-500'],
            },
            fonts: {} as any,
            // fonts: rnTheme.fonts,
          }}
        >
          <AuthProvider>
            <StackNavigator />
          </AuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default ProductsApp;
