import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

export const PostScreen = ({ navigation }) => {
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
        Post Screen
      </AppText>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  )
}

PostScreen.navigationOptions = {
  headerTitle: 'Post #42'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
