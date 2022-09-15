import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

export const CreateScreen = ({ navigation }) => {
  const colors = COLORS[useContext(ThemeContext).theme];

  return (
    <View style={{ ...styles.screen, backgroundColor: colors.appBg }}>
      <AppText bold large>
        Create Screen
      </AppText>
    </View>
  )
}

CreateScreen.navigationOptions = ({ screenProps }) => {
  const colors = screenProps.colors;

  return {
    headerTitle: 'Create post',
    headerStyle: {
      backgroundColor: colors.navbarBgColor,
    },
    headerTintColor: colors.accentColor,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
