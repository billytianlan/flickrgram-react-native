'use strict';

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  MapView,
  TouchableHighlight
} from 'react-native';

export class MapExplore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: {
        latitude: 0,
        longitude: 0
      }
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
          annotations={[this.state.pin]}
        >
        </MapView>
        <TouchableHighlight style={styles.button} onPress={this.mapSearch.bind(this)}>
          <Text> Search </Text>
        </TouchableHighlight>
      </View>
    )
  }

  onRegionChangeComplete(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    })
    console.log(region);
  }

  mapSearch() {
    this.props.navigator.push({name: 'home'})
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 13
  },
  button: {
    flex: 1,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    justifyContent: 'center'
  }
});

