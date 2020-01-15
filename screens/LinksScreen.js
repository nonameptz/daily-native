import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    headerStyle: {
      backgroundColor: Colors.backgroundColorDefault
    },
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>TBD:)</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#cae4db',
  },
});
