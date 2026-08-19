import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/StackNavigation';
import { useAuthStore } from '../store/useAuthStore';

interface AuthProviderProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const AuthProvider = ({ children }: AuthProviderProps): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const checkStatus = useAuthStore(state => state.checkStatus);
  const status = useAuthStore(state => state.status);

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status != 'checking') {
      if (status == 'authenticated') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        });
      } else
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
    }
  }, [status]);

  return <>{children}</>;
};
export default AuthProvider;
