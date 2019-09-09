import React, { Component } from 'react';
import { View, Text, AsyncStorage, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderText from '../assets/HeaderText';
import values from '../values';
// import { ScrollView } from 'react-native-gesture-handler';

class User extends Component {
  static navigationOptions = {
    header: (
      <HeaderText HeaderText={'My Account'} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
    };

    // this.props.navigation.reset(this.props.navigation.navigate('Login'));
    // this.props.navigation.replace('History');
  }
  
  renderLoginButton = () => {
    return (
      <View style={[styles.flex, styles.loginWrapper]}>
        <Text style={[styles.text]}>Silahkan Login / Register Terlebih Dahulu</Text>
        <View style={[styles.flex, styles.row]}>
          <View style={[styles.flex]}>
            <TouchableOpacity 
              activeOpacity={0.5} 
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <View style={[styles.buttonLogin]}>
                <Text style={[styles.textLogin]}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.flex]}>
            <TouchableOpacity 
              activeOpacity={0.5} 
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <View style={[styles.buttonRegister]}>
                <Text style={[styles.textRegister]}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView 
        showsVerticalScrollIndicator={false}  
        // style={{ backgroundColor: values.colors.secondary }}
      >
        
        {this.renderLoginButton()}
        <Text> User </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  loginWrapper: {
    backgroundColor: values.colors.secondary,
    marginTop: 0,
    paddingBottom: 20,
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  stretch: {
    alignItems: 'center',
  },
  buttonLogin: {
    backgroundColor: 'white',
    alignContent: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  textLogin: {
    color: values.colors.primary,
    fontWeight: 'bold',
    alignSelf: 'center',
  }, 
  buttonRegister: {
    backgroundColor: values.colors.primary,
    alignContent: 'center',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  textRegister: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  }, 
});

export default User;
