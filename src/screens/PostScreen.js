import React from "react"
import { View, StyleSheet, Button } from "react-native"

import { AppText } from "../ui/AppText"

import { colors } from "../constants/colors"

export const PostScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
