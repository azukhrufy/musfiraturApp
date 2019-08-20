import React, { Component } from 'react';
import { View, Text } from 'react-native';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.props.navigation.push('Login');
    // this.props.navigation.replace('History');
  }

  render() {
    return (
      <View>
        <Text> User </Text>
      </View>
    );
  }
}

export default User;
