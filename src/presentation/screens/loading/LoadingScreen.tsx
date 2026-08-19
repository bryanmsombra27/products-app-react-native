import { Layout, Spinner } from '@ui-kitten/components';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LoadingScreenProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const LoadingScreen = ({}: LoadingScreenProps): React.JSX.Element => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Spinner status="primary" size="large" />
    </Layout>
  );
};
export default LoadingScreen;
