'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class flickrgramReactNative extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/photos')
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          photos: responseJSON
        })
      })
      .catch((err) => {
        throw(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.photos.map((photo) => {
          return (
            <Image style={styles.photo} key={photo.id} source={{uri: photo.url}}/>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  photo: {
    flex: 1,
    width: 400, 
    height: 400
  }
});

AppRegistry.registerComponent('flickrgramReactNative', () => flickrgramReactNative);
