import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import { MainScreen } from './screens/MainScreen';
import { CreateScreen } from './screens/CreateScreen';
import { AboutScreen } from './screens/AboutScreen';
import { BookmarkedScreen } from './screens/BookmarkedScreen';
import { PostScreen } from './screens/PostScreen';

import { colors } from './constants/colors';

export const MainLayout = ({ onLayoutRootView }) => {
  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <MainScreen />
      {/* <CreateScreen /> */}
      {/* <AboutScreen /> */}
      {/* <BookmarkedScreen /> */}
      {/* <PostScreen /> */}
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