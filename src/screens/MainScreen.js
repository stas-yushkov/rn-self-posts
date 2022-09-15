import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

import { AppText } from '../ui/AppText';
import { Post } from '../components/Post';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';

import { DATA } from '../data'

export const MainScreen = ({ navigation }) => {
  const colors = COLORS[useContext(ThemeContext).theme];

  useEffect(() => {//need to be fixed in react-navigation v6
    MainScreen.navigationOptions = {
      ...MainScreen.navigationOptions,
      headerStyle: {
        backgroundColor: colors.navbarBgColor,
      },
      headerTintColor: colors.accentColor,
    };
  })

  return (
    <View style={{ ...styles.wrapper, backgroundColor: colors.appBg }}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} />}
      />
      {/* <AppText bold large>
        Main Screen
      </AppText>
      <Button
        title="Go to Post"
        onPress={() => navigation.navigate('Post')}
      /> */}
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'My blog',
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
})
