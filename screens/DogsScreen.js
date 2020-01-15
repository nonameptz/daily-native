import React from 'react';
import Pet from '../components/Pet';

export default class DogsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <Pet animal="dogs"></Pet>
    )
  }
}