import React, { useContext } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Post = ({ post, onOpen }) => {
  const colors = COLORS[useContext(ThemeContext).theme];
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground
          style={styles.img}
          source={{ uri: post.img }}
          resizeMode="cover"
          accessible
          accessibilityLabel="Open Post"
        >
          <View style={{ ...styles.textWrap, backgroundColor: colors.textBgOverImg }}>
            <AppText small color={colors.WHITE}>
              {new Date(post.date).toLocaleDateString()}
            </AppText>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'

  },
  post: {
    marginBottom: 15,
    overflow: 'hidden'
  }
})