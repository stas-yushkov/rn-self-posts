import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

export const MainScreen = ({ navigation }) => {
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
        Main Screen
      </AppText>
      <Button
        title="Go to Post"
        onPress={() => navigation.navigate('Post')}
      />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'My blog',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
