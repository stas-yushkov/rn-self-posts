import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { AppText } from '../ui/AppText';
import { Post } from '../components/Post';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

import { DATA } from '../data'

export const MainScreen = ({ navigation }) => {
  const colors = COLORS[useContext(ThemeContext).theme];

  const openPostHandler = (post) => {
    navigation.navigate('Post', { postId: post.id, date: post.date })
  };

  return (
    <View style={{ ...styles.wrapper, backgroundColor: colors.appBg }}>
      <AppText bold large>
        Main Screen
      </AppText>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post onOpen={openPostHandler} post={item} />}
      />
    </View>
  )
}

MainScreen.navigationOptions = ({ screenProps }) => {
  const colors = screenProps.colors;

  return {
    headerTitle: 'My blog',
    headerStyle: {
      backgroundColor: colors.navbarBgColor,
    },
    headerTintColor: colors.accentColor,
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
})
