import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const colors = COLORS[useContext(ThemeContext).theme];

  return (
    <View style={{ ...styles.screen, backgroundColor: colors.appBg }}>
      <AppText bold large>
        Post #{postId}
      </AppText>
      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  )
}

PostScreen.navigationOptions = ({ navigation, screenProps }) => {
  const date = navigation.getParam('date');
  const colors = screenProps.colors;

  return {
    headerTitle: `Posted: ${new Date(date).toLocaleDateString()}`,
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
