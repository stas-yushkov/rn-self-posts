import React, { useContext } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { AppText } from '../ui/AppText';

import { COLORS } from '../constants/colors';
import { ThemeContext } from '../context/ThemeContext';


export const Post = ({ post }) => {
  const colors = COLORS[useContext(ThemeContext).theme];
  return (
    <View style={styles.post}>
      <ImageBackground
        style={styles.img}
        source={{ uri: post.img }}
        resizeMode="cover"
      // accessible
      // accessibilityLabel="Open Post"
      >
        <View style={{ ...styles.textWrap, backgroundColor: colors.textBgOverImg }}>
          <AppText small color={colors.WHITE}>
            {new Date(post.date).toLocaleDateString()}
          </AppText>
        </View>
      </ImageBackground>
    </View>
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