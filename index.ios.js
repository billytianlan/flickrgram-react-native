'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import { PhotoEntry } from './components/photoEntry';
import { SearchBar } from './components/searchBar';

class flickrgramReactNative extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      photos: [],
      text: null
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
        <SearchBar text={this.state.text} searchTags={this.searchTags.bind(this)} setText={this.setText.bind(this)} />
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
  searchTags() {
    console.log('the searchining beings');
    let query = this.state.text
    fetch(`http://localhost:3000/api/tags/?query=${query}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON);
      this.setState({
        photos: responseJSON
      })
    })
  }

  setText(val) {
    this.setState({
      text: val
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 9
  }
});

AppRegistry.registerComponent('flickrgramReactNative', () => flickrgramReactNative);
