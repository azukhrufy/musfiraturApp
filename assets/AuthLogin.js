import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';

class AuthLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		
		// eslint-disable-next-line no-underscore-dangle
		this._bootstrapAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken');

		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		this.props.navigation.navigate(userToken ? 'App' : 'Auth');
	};

	render() {
		return (
		<View>
			<Text> AuthLogin </Text>
			<ActivityIndicator />
			<StatusBar barStyle="default" />
		</View>
		);
	}
}

export default AuthLogin;
