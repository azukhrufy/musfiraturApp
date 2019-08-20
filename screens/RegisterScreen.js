import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image, Button } from 'react-native';
import values from '../values';
// import { Button } from 'react-native-elements';
// import AppStyles from '../AppStyles';

class RegisterScreen extends Component {
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
            <View style={styles.title}>
              <Image 
                source={require('../assets/icon.png')} 
                style={styles.img} 
                resizeMode='contain'
              />
            </View>
            <View style={styles.container} >
                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Enter UserName"
                    onChangeText={UserName => this.setState({ UserName })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
        
                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Enter Full Name"
                    onChangeText={UserFullName => this.setState({ UserFullName })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
        
                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Enter User Email"
                    onChangeText={UserEmail => this.setState({ UserEmail })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
        
                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Enter User Password"
                    onChangeText={UserPassword => this.setState({ UserPassword })}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    secureTextEntry={true}
                />

                <Button
                    type="solid"
                    title="Register Now"
                    buttonStyle={styles.buttonRegister}
                    // containerStyle={styles.RegisterContainer}
                    onPress={this.UserRegistrationFunction}
                />
                <View style={styles.separator} />
                <Button
                    // containerStyle={styles.buttonLogin}
                    type="outline"
                    title="Already Have an Account? Login"
                    onPress={() => this.props.navigation.replace('Login')}
                    buttonStyle={styles.buttonLogin}
                />
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
  },
    container: {
        flex: 1,
        // alignItems: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    buttonRegister: {
        backgroundColor: '#17bebb',
        marginHorizontal: '15%',
        width: '70%',
        borderRadius: 25,
        padding: 10,
        marginTop: 30
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
  }
});

export default RegisterScreen;
