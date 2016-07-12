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
      <View style={styles.buttons}>
        <TouchableHighlight underlayColor={'gray'} style={styles.button} onPress={props.searchTags}> 
          <Text> Search </Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'gray'} style={styles.button} onPress={() => {props.navigator.push({name: 'map'})}}> 
          <Text> Map </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  searchBar: {
    flex: 3
  },
  searchBarInput: { 
    flex: 1,
    height: 40, 
    width: 350,
    marginTop: 20
  },
  buttons: {
    flexDirection: 'row', 
    flex: 1, 
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    height: 40, 
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center'
  }
})
