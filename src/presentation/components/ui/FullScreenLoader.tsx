import { Layout, Spinner } from '@ui-kitten/components';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FullScreenLoaderProps extends PropsWithChildren {}

const Styles = StyleSheet.create({});

const FullScreenLoader = ({}: FullScreenLoaderProps): React.JSX.Element => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner size="gigant" />
    </Layout>
  );
};
export default FullScreenLoader;
