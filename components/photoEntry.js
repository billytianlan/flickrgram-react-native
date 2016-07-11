'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

let PhotoEntry = ({photo}) => {
  return (
    <Image style={styles.photo} source={{uri: photo.url}}/>
  );
}

const styles = StyleSheet.create({
  photo: {
    flex: 1,
    width: 400, 
    height: 400
  }
});

module.exports = PhotoEntry
