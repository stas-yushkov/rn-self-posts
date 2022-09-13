import React from "react"
import { View, StyleSheet } from "react-native"

import { AppText } from "../ui/AppText"

import { colors } from "../constants/colors"

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <AppText
        bold
        large
        style={{
          color: colors.textColor,
        }}
      >
        About Screen
      </AppText>
    </View>
  )
}

AboutScreen.navigationOptions = {
  headerTitle: 'About'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
