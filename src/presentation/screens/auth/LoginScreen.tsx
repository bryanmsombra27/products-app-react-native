import { Button, Input, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Alert,
} from 'react-native';
import MyIcon from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';
import { useAuthStore } from '../../store/useAuthStore';
interface LoginScreenProps
  extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

const Styles = StyleSheet.create({});

const LoginScreen = ({ navigation }: LoginScreenProps): React.JSX.Element => {
  const { height } = useWindowDimensions();
  const login = useAuthStore(state => state.login);
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const [form, setForm] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    if (form.email.length == 0 || form.password.length == 0) return;
    setIsPosting(true);

    const wasSuccessful = await login(form.email, form.password);

    setIsPosting(false);
    if (wasSuccessful) return;

    Alert.alert('Error', 'Usuario o contraseña incorrectos');
  };

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
            onChangeText={e =>
              setForm(state => ({
                ...state,
                email: e,
              }))
            }
            accessoryLeft={<MyIcon name="email-outline" />}
          />
          <Input
            placeholder="contraseña"
            style={{ marginBottom: 10 }}
            secureTextEntry
            accessoryLeft={<MyIcon name="lock-outline" />}
            autoCapitalize="none"
            onChangeText={e =>
              setForm(state => ({
                ...state,
                password: e,
              }))
            }
          />
        </Layout>

        <Layout style={{ height: 20 }} />

        <Layout>
          <Button
            disabled={isPosting}
            style={isPosting && { pointerEvents: 'none' }}
            onPress={onLogin}
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
          <Text
            status="primary"
            category="s1"
            onPress={() => {
              navigation.navigate('RegisterScreen');
            }}
          >
            Crea una
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
export default LoginScreen;
