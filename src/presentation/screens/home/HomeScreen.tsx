import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyIcon from '../../components/ui/MyIcon';
import { useAuthStore } from '../../store/useAuthStore';

interface HomeScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const HomeScreen = ({}: HomeScreenProps): React.JSX.Element => {
  const logout = useAuthStore(state => state.logout);

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Button
        onPress={logout}
        accessoryLeft={<MyIcon name="log-out-outline" />}
      >
        Cerrar Sesión
      </Button>
    </Layout>
  );
};
export default HomeScreen;
