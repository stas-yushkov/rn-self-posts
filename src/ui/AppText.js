import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

export const AppText = ({
  children,
  style = {},
  color = COLORS[useContext(ThemeContext).theme].textColor,
  large = false,
  small = false,
  bold = false
}) => {
  return (
    <Text
      style={{
        ...styles.text,
        color,
        fontFamily: bold ? 'openSans-bold' : 'openSans-regular',
        fontSize: large ? 26 : 18,
        fontSize: small ? 12 : 18,
        ...style
      }}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    //
  }
})