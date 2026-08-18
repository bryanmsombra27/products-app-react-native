import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LoadingScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const LoadingScreen = ({}: LoadingScreenProps): React.JSX.Element => {
  return (
    <View>
      <Text> LoadingScreen View Component </Text>
    </View>
  );
};
export default LoadingScreen;
