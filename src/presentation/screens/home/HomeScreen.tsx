import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HomeScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const HomeScreen = ({}: HomeScreenProps): React.JSX.Element => {
  return (
    <View>
      <Text> HomeScreen View Component </Text>
    </View>
  );
};
export default HomeScreen;
