'use strict';

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  MapView
} from 'react-native';

export class MapExplore extends Component {
  render() {
    return (
      <MapView style={styles.map}/>
    )
  }
}

const styles = {
  map: {
    flex: 1
  }
}
