/* eslint-disable no-undef */
import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  GoToApi = () => {
    fetch('http://202.74.236.63/travellingqu/test', {
        // method: 'JSON', // asalnya POST
        // headers: {
        //     'Accept': 'application/json, text/plain, */*',
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({            
        //     // username: UserName,
        //     // fullname: UserFullName,
        //     // email: UserEmail,
        //     // password: UserPassword
        // })
    }).then((response) => response.text())
    .then((responseJson) => {
      const t = JSON.stringify(responseJson);
      console.log(`return - ${t}`);
      console.log(`return raw - ${responseJson}`);
      // Showing response message coming from server after inserting records.
      Alert.alert(responseJson);
    }).catch((error) => {
        console.error(error);
    });
  }

  render() {
    return (
      <View>
        <Text> UserScreen </Text>
        <Button
            type="solid"
            title="Register Now"
            // buttonStyle={styles.buttonRegister}
            // containerStyle={styles.RegisterContainer}
            onPress={this.GoToApi}
        />
      </View>
    );
  }
}

export default UserScreen;
