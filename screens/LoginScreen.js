import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Item, Input, Button } from 'native-base';

import values from '../values';
// import { Button } from 'react-native-elements';
// import AppStyles from '../AppStyles';


class LoginScreen extends Component {
    constructor(props) {
		super(props);
		this.state = {
			UserName: '',
			UserFullName: '',
			UserEmail: '',
			UserPassword: ''
		};
    }
    
    UserRegistrationFunction = () => {
      const { UserName } = this.state;
      const { UserFullName } = this.state;
      const { UserEmail } = this.state;
      const { UserPassword } = this.state;

		// fetch('http://192.168.43.252/react_native/user_registration.php', {
		// 	method: 'JSON', // asalnya POST
		// 	headers: {
		// 		'Accept': 'application/json, text/plain, */*',
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({            
		// 		username: UserName,
		// 		fullname: UserFullName,
		// 		email: UserEmail,
		// 		password: UserPassword
		// 	})
		// }).then((response) => response.text())
		// .then((responseJson) => {
		// 	// Showing response message coming from server after inserting records.
		// 	Alert.alert(responseJson);
		// }).catch((error) => {
		// 	console.error(error);
		// });
    }
    
    render() {
        return (
          <View style={styles.wrapper}>
            <View style={styles.container} >
              <Image 
                source={require('../assets/icon-long.png')} 
                style={styles.img} 
                resizeMode='contain'
              />
              <Item rounded style={{ marginLeft: 10, marginRight: 10, }}>
                <Input 
                  placeholder='Enter Username' 
                  onChangeText={UserName => this.setState({ UserName })}
                />
              </Item>
              <View style={styles.separator} />
              <Item rounded style={{ marginLeft: 10, marginRight: 10, }}>
                <Input 
                  placeholder='Enter Password' 
                  onChangeText={UserPassword => this.setState({ UserPassword })}
                  secureTextEntry
                />
              </Item>
              <View style={styles.separator} />
              <View style={styles.separator} />
              <Button 
                rounded block 
                style={{ 
                  backgroundColor: values.colors.secondary, 
                  marginLeft: 10, 
                  marginRight: 10 
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Login</Text>
              </Button>
              <View style={styles.separator} />
              <View style={styles.separator} />
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <Text>
                  Belum punya akun?&nbsp;
                </Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Register')}
                >
                  <Text style={{ fontWeight: 'bold', color: values.colors.primary }}>
                    Register Sekarang
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View> 
          </View>
        );
    }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  title: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  img: {
    width: values.DeviceWidth * 0.8,
    // height: 100,
    alignSelf: 'center',
  },
    container: {
        flex: 1,
        // alignItems: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    buttonRegister: {
        backgroundColor: '#17bebb',
        marginHorizontal: '15%',
        width: '70%',
        borderRadius: 25,
        padding: 10,
        marginTop: 30,
        marginBottom: 20
    },
    buttonLogin: {
        borderColor: 'blue',
        // borderWidth: 2,
        // backgroundColor: '#ffffff',
        marginHorizontal: '15%',
        width: '70%',
        borderRadius: 25,
        padding: 10,
        marginTop: 10
    },
	TextInputStyleClass: {
		textAlign: 'center',
		marginBottom: 7,
		height: 40,
		borderWidth: 1,
		// Set border Hex Color Code Here.
		borderColor: '#2196F3',
		
		// Set border Radius.
		borderRadius: 5,
		
		// Set border Radius.
		//borderRadius: 10 ,
  },
  separator: {
    height: 7
  },
  text: {
    top: 0,
    left: 0,
    color: '#121212',
    position: 'absolute',
    fontSize: 28,
    fontStyle: 'normal',
    textAlign: 'center'
  }
});

export default LoginScreen;
