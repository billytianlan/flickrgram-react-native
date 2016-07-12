'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TextInput
} from 'react-native';

import { PhotoEntry } from './components/photoEntry'

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
        <View style={styles.searchBar}>
          <TextInput style={styles.searchBarInput} placeholder="Search Pics"/>
        </View>
        <ScrollView ref="scrollView" style={styles.scrollView}>
          {this.state.photos.map((photo) => {
            return (
              <PhotoEntry key={photo.id} photo={photo}/>
            )
          })}
        </ScrollView>
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
  scrollView: {
    flex: 8
  },
  searchBar: {
    flex: 1
  },
  searchBarInput: { 
    height: 40, 
    width: 350,
    marginTop: 20
  }
});

AppRegistry.registerComponent('flickrgramReactNative', () => flickrgramReactNative);
