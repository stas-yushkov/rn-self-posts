import React from "react"
import { View, StyleSheet } from "react-native"

import { AppText } from "../ui/AppText"

import { colors } from "../constants/colors"

export const CreateScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <AppText
        bold
        large
        style={{
          color: colors.textColor,
        }}
      >
        Create Screen
      </AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
