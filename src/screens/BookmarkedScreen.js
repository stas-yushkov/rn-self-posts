import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

export const BookmarkedScreen = ({ navigation }) => {
  const colors = COLORS[useContext(ThemeContext).theme];

  return (
    <View style={{ ...styles.screen, backgroundColor: colors.appBg }}>
      <AppText
        bold
        large
        style={{
          color: colors.textColor,
        }}
      >
        Bookmarked Screen
      </AppText>
    </View>
  )
}

BookmarkedScreen.navigationOptions = {
  headerTitle: 'Bookmarked posts'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
