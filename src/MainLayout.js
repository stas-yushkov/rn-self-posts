import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Button } from 'react-native';

import { AppNavigation } from './navigation/AppNavigation';

import { COLORS } from './constants/colors';
import { ThemeContext } from './context/ThemeContext';

export const MainLayout = ({ onLayoutRootView }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const colors = COLORS[theme];

  return (
    <View
      style={{ ...styles.container, backgroundColor: colors.appBg }}
      onLayout={onLayoutRootView}
    >
      <AppNavigation
        screenProps={{ colors }}
      />
      <StatusBar
        style={colors.statusBarStyle}
      // animated='fade'
      />
      <View style={{
        position: 'absolute',
        bottom: 80,
        right: 40,
      }}>
        <Button
          title="TOGGLE THEME"
          onPress={toggleTheme}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});