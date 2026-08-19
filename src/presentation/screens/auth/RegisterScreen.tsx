import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import MyIcon from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';

interface RegisterScreenProps
  extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

const Styles = StyleSheet.create({});

const RegisterScreen = ({
  navigation,
}: RegisterScreenProps): React.JSX.Element => {
  const { height } = useWindowDimensions();

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.35 }}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="Nombre completo"
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name="person-outline" />}
          />
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
            Crear cuenta
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
          <Text>¿Ya tienes cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => {
              navigation.goBack();
            }}
          >
            Inicia Sesión
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
export default RegisterScreen;
