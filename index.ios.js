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

import { PhotoEntry } from './components/photoEntry'

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
        <View style={styles.searchBar}>
          <TextInput style={styles.searchBarInput} placeholder="Search Pics" value={this.state.text} onChangeText={(text) => {this.setState({text: text})}}/>
          <TouchableHighlight style={styles.button} onPress={this.searchTags.bind(this)}> 
            <Text> Search </Text>
          </TouchableHighlight>
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
  searchTags() {
    console.log('the searchining beings');
    let query = this.state.text
    fetch(`http://localhost:3000/api/photos/?query=${query}`)
      .then((response) => resonse.json())
      .then((responseJSON)) => {
        console.log(responseJSON);
        this.setState({
          photos: responseJSON
        })
      }
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
    flex: 9
  },
  searchBar: {
    flex: 2
  },
  searchBarInput: { 
    height: 40, 
    width: 350,
    marginTop: 20
  },
    button: {
    height: 40, 
    width: 350,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderRadius: 8,
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('flickrgramReactNative', () => flickrgramReactNative);
