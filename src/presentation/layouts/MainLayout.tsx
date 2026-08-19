import {
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/StackNavigation';
import MyIcon from '../components/ui/MyIcon';

interface MainLayoutProps extends PropsWithChildren {
  title: string;
  subTitle?: string;
  rightAction?: () => void;
  rightActionIcon?: string;
}

const styles = StyleSheet.create({});

const MainLayout = ({
  children,
  title,
  rightAction,
  rightActionIcon,
  subTitle,
}: MainLayoutProps): React.JSX.Element => {
  const { top } = useSafeAreaInsets();

  const { canGoBack, goBack } =
    useNavigation<NavigationProp<RootStackParams>>();

  const renderBackAction = () => {
    return (
      <TopNavigationAction
        icon={<MyIcon name="arrow-back-outline" />}
        onPress={goBack}
      />
    );
  };

  const RenderRightAction = () => {
    if (rightActionIcon == undefined || rightAction == undefined) return null;

    return (
      <TopNavigationAction
        icon={<MyIcon name={rightActionIcon} />}
        onPress={rightAction}
      />
    );
  };

  return (
    <Layout
      style={{
        paddingTop: top + 20,
      }}
    >
      <TopNavigation
        title={title}
        subtitle={subTitle}
        alignment="center"
        accessoryLeft={canGoBack() ? renderBackAction : undefined}
        accessoryRight={() => <RenderRightAction />}
      />
      <Divider />

      <Layout style={{ height: '100%' }}>{children}</Layout>
    </Layout>
  );
};
export default MainLayout;
