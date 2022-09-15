import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

export const AboutScreen = ({ navigation }) => {
  const colors = COLORS[useContext(ThemeContext).theme];

  useEffect(() => {//need to be fixed in react-navigation v6
    AboutScreen.navigationOptions = {
      ...AboutScreen.navigationOptions,
      headerStyle: {
        backgroundColor: colors.navbarBgColor,
      },
      headerTintColor: colors.accentColor,
    };
  })

  return (
    <View style={{ ...styles.screen, backgroundColor: colors.appBg }}>
      <AppText bold large>
        About Screen
      </AppText>
    </View >
  )
}

AboutScreen.navigationOptions = {
  headerTitle: 'About'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
