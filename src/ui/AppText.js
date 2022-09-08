import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppText = ({ children, style = {}, large = false, small = false, bold = false }) => {
  return (
    <Text
      style={{
        ...styles.text,
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