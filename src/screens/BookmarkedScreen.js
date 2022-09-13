import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AppText } from '../ui/AppText';

import { colors } from '../constants/colors';

export const BookmarkedScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
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
    backgroundColor: colors.appBg
  }
})
