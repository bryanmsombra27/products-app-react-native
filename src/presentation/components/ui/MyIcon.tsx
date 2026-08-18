import { Icon, useTheme } from '@ui-kitten/components';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MyIconProps extends PropsWithChildren {
  name: string;
  color?: string;
  white?: boolean;
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

const MyIcon = ({
  name,
  color,
  white = false,
}: MyIconProps): React.JSX.Element => {
  const theme = useTheme();

  if (white) {
    color = theme['color-info-100'];
  } else if (!color) {
    color = theme['text-basic-color'];
  } else {
    color = theme[color] ?? theme['text-basic-color'];
  }

  return <Icon name={name} style={styles.icon} fill={color} />;
};
export default MyIcon;
