import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import { AppNavigation } from './navigation/AppNavigation';

import { colors } from './constants/colors';

export const MainLayout = ({ onLayoutRootView }) => {
  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <AppNavigation />
      <StatusBar style="auto" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
});