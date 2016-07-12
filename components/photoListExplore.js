'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

import { PhotoEntry } from './photoEntry';
import { SearchBar } from './searchBar';

export class PhotoListExplore extends Component {
  render() {
    return (
      <View style={styles.exploreView}>
        <SearchBar 
          text={this.props.text} 
          searchTags={this.props.searchTags} 
          setText={this.props.setText}  
          navigator={this.props.navigator}        
        />
        <ScrollView ref="scrollView" style={styles.scrollView}>
          {this.props.photos.map((photo) => <PhotoEntry key={photo.id} photo={photo}/>)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  exploreView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  scrollView: {
    flex: 9
  }
})

