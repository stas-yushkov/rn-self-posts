import React, { useContext } from 'react';
import { View, StyleSheet, Button, Image, ScrollView, Alert } from 'react-native';

import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

import { DATA } from '../data';

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const colors = COLORS[useContext(ThemeContext).theme];
  const post = DATA.find(p => p.id === postId)
  const removeHandler = () => {
    Alert.alert(
      "Warning",
      "Are you shure to remove post?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Remove",
          style: 'destructive',
          onPress: () => console.log("OK Pressed")
        }
      ]
    );
  }

  return (
    <View style={{ ...styles.screen, backgroundColor: colors.appBg }}>
      <ScrollView>
        <Image source={{ uri: post.img }} style={styles.img} />
        <View style={styles.textWrap}>
          <AppText bold large>
            {post.text}
          </AppText>
        </View>
        <Button
          title="Delete"
          color={colors.dangerColor}
          onPress={removeHandler}
        />
      </ScrollView>
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
  },
  img: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10
  }
})
