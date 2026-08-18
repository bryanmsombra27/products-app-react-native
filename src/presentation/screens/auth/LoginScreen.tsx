import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import MyIcon from '../../components/ui/MyIcon';

interface LoginScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const LoginScreen = ({}: LoginScreenProps): React.JSX.Element => {
  const { height } = useWindowDimensions();

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.35 }}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor ingrese para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="email"
            style={{ marginBottom: 10 }}
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" />}
          />
          <Input
            placeholder="contraseña"
            style={{ marginBottom: 10 }}
            secureTextEntry
            accessoryLeft={<MyIcon name="lock-outline" />}
            autoCapitalize="none"
          />
        </Layout>

        <Layout style={{ height: 20 }} />

        <Layout>
          <Button
            onPress={() => {}}
            appearance="ghost"
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}
          >
            Ingresar
          </Button>
        </Layout>
        <Layout style={{ height: 50 }} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text>¿No tienes cuenta?</Text>
          <Text status="primary" category="s1" onPress={() => {}}>
            Crea una
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
export default LoginScreen;
