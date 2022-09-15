import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

export const CreateScreen = ({ navigation }) => {
  const colors = COLORS[useContext(ThemeContext).theme];

  useEffect(() => {//need to be fixed in react-navigation v6
    CreateScreen.navigationOptions = {
      ...CreateScreen.navigationOptions,
      headerStyle: {
        backgroundColor: colors.navbarBgColor,
      },
      headerTintColor: colors.accentColor,
    };
  })

  return (
    <View style={{ ...styles.screen, backgroundColor: colors.appBg }}>
      <AppText bold large>
        Create Screen
      </AppText>
    </View>
  )
}

CreateScreen.navigationOptions = {
  headerTitle: 'Create post'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
