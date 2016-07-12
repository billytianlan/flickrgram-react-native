'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator
} from 'react-native';

import { SearchBar } from './components/searchBar';
import { PhotoListExplore } from './components/photoListExplore';
import { MapExplore } from './components/mapExplore';

const ROUTES = {
  home: PhotoListExplore,
  map: MapExplore
}

class flickrgramReactNative extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      photos: [],
      text: null
    };
  }

  componentDidMount() {
    let options = {
      endpoint: 'photos'
    }
    this.serverConnect(options);
  }

  renderScene(route, navigator) {
    let Component = ROUTES[route.name];
    return <Component 
      route={route} 
      navigator={navigator} 
      photos={this.state.photos} 
      text={this.state.text} 
      searchTags={this.searchTags.bind(this)}
      setText={this.setText.bind(this)}
      renderMapData={this.renderMapData.bind(this)}
    />;
  }

  render() {
    return (
      <Navigator style={styles.container}
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene.bind(this)}
        configureSecene={() => Navigator.SceneConfigs.FloatFromRight }
      />
    );
  }

  searchTags() {
    let query = this.state.text
    let options = {
      endpoint: 'tags',
      query: query
    }
    if (query) {
      this.serverConnect(options);
    }
  }

  setText(val) {
    this.setState({
      text: val
    })
  }

  renderMapData(data) {
    this.setState({
      photos: data
    })
  }

  serverConnect(options) {
    fetch(`http://localhost:3000/api/${options.endpoint}/?query=${options.query}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          photos: responseJSON,
          text: ''
        })
      })
      .catch((err) => {
        throw(err);
      });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('flickrgramReactNative', () => flickrgramReactNative);
