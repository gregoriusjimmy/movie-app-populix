import { moderateScale } from '@utils/scale';
import { colors } from '@utils/theme';
import { forwardRef } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

interface Props extends TextProps {
  children: string | JSX.Element;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h1Medium'
    | 'h2Medium'
    | 'h3Medium'
    | 'h4Medium'
    | 'h5Medium'
    | 'h1Bold'
    | 'h2Bold'
    | 'h3Bold'
    | 'h4Bold'
    | 'h5Bold'
    | 'p'
    | 'subtitle'
    | 'subtitleMedium'
    | 'caption';
  color?: 'light' | 'dark' | 'error' | 'gray';
}

export const CText = forwardRef<Text, Props>(
  ({ style, variant = 'subtitle', color = 'dark', children, ...otherProps }, ref) => {
    return (
      <Text ref={ref} style={[styles[variant], styles[color], style]} {...otherProps}>
        {children}
      </Text>
    );
  }
);

export const CTEXT = {
  fontSize: {
    h1: 38,
    h2: 30,
    h3: 24,
    h4: 20,
    h5: moderateScale(18),
    subtitle: 16,
    p: 14,
    caption: 14,
  },
};

const styles = StyleSheet.create({
  h1: {
    fontSize: CTEXT.fontSize.h1,
  },
  h2: {
    fontSize: CTEXT.fontSize.h2,
  },
  h3: {
    fontSize: CTEXT.fontSize.h3,
  },
  h4: {
    fontSize: CTEXT.fontSize.h4,
  },
  h5: {
    fontSize: CTEXT.fontSize.h5,
  },
  h1Medium: {
    fontSize: CTEXT.fontSize.h1,
  },
  h2Medium: {
    fontSize: CTEXT.fontSize.h2,
  },
  h3Medium: {
    fontSize: CTEXT.fontSize.h3,
  },
  h4Medium: {
    fontSize: CTEXT.fontSize.h4,
  },
  h5Medium: {
    fontSize: CTEXT.fontSize.h5,
  },
  h1Bold: {
    fontSize: CTEXT.fontSize.h1,
  },
  h2Bold: {
    fontSize: CTEXT.fontSize.h2,
  },
  h3Bold: {
    fontSize: CTEXT.fontSize.h3,
  },
  h4Bold: {
    fontSize: CTEXT.fontSize.h4,
  },
  h5Bold: {
    fontSize: CTEXT.fontSize.h5,
  },
  subtitle: {
    fontSize: CTEXT.fontSize.subtitle,
  },
  subtitleMedium: {
    fontSize: CTEXT.fontSize.subtitle,
  },
  p: {
    fontSize: CTEXT.fontSize.p,
  },
  caption: {
    fontSize: CTEXT.fontSize.caption,
  },
  light: {
    color: colors.base.white,
  },
  dark: {
    color: colors.base.black,
  },
  gray: {
    color: colors.base.gray,
  },
  error: {
    color: 'red',
  },
});
