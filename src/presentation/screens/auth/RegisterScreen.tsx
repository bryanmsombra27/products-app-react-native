import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RegisterScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const RegisterScreen = ({}: RegisterScreenProps): React.JSX.Element => {
  return (
    <View>
      <Text> RegisterScreen View Component </Text>
    </View>
  );
};
export default RegisterScreen;
