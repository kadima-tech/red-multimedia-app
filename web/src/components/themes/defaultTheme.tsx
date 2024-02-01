import React from 'react';
import { ThemeProvider } from 'styled-components';

type Props = {
  children?: React.ReactNode;
};

export type ThemeType = typeof theme;

export const theme = {
  breakPoints: {
    xsmall: '576px',
    small: '768px',
    medium: '992px',
    large: '1200px',
    xlarge: '1400px',
  },
  colors: {
    text: '#808080',
    primary: '#174066',
    primaryLight: '#B3D5F3',
    primaryDark: '#B3D5F3',
    secondary: '#51B5E0',
    secondaryLight: '#D7F0FB',
    black: '#000',
    white: '#FFF',
    background: '#fafafa',
    greyDark: '#B6B6B6',
    grey: '#DDD',
    greyLight: '#D9D9D9',
    red: 'FF0000',
  },
  radius: {
    none: '0',
    small: '0.25rem',
    medium: '0.5rem',
    big: '1.5rem',
    round: '100rem',
  },
  fonts: {
    default: ['Manrope', 'sans-serif'].join(','),
  },
  fontSizes: {
    xsmall: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  lineHeight: {
    small: 0.5,
    reset: 1,
    normal: 1.25,
    large: 1.5,
  },
  spacing: {
    xxsmall: '0.25rem',
    xsmall: '0.5rem',
    small: '0.75rem',
    medium: '1.5rem',
    large: '3rem',
  },
  icons: {
    small: '0.75rem',
    medium: '1.5rem',
    large: '3rem',
  },
  shadow: {
    small: '0 3px 6px rgba(0,0,0,.1)',
  },
};

const Theme: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
