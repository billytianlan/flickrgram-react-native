'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export let PhotoEntry = ({photo}) => {
  return (
    <View style={styles.photoEntry}>
      <View>
        <Image resizeMode="cover" style={styles.photo} source={{uri: photo.url}}/>
      </View>
      <View>
        <Text style={styles.description}> {photo.description} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photoEntry: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  photo: {
    flex: 9,
    height:250,
    width: 400,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  description: {
    flex: 1
  }
});
