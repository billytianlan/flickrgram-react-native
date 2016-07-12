'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';

export let SearchBar = (props) => {
  return(
    <View style={styles.searchBar}>
      <TextInput style={styles.searchBarInput} placeholder="Search Pics" value={props.text} onChangeText={(text) => {props.setText(text)}}/>
      <TouchableHighlight style={styles.button} onPress={props.searchTags}> 
        <Text> Search </Text>
      </TouchableHighlight>
    </View>
  )
} 

const styles = {
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
}
