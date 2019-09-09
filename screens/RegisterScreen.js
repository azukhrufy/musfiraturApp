import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Item, Input, Button } from 'native-base';
import values from '../values';
import HeaderText from '../assets/HeaderText';

class RegisterScreen extends Component {
  static navigationOptions = {
    header: (
      <HeaderText HeaderText={'Daftar Menjadi Member'} />
    )
  }

    constructor(props) {
    super(props);
    this.state = {
      UserGroup: '1',
      UserName: '',
      UserFullName: '',
      UserEmail: '',
      UserPassword: '',
      UserPhoneNumber: '',
    };
    }
    
    UserRegistrationFunction = () => {
      const { UserGroup } = this.state;
      const { UserName } = this.state;
      const { UserFullName } = this.state;
      const { UserEmail } = this.state;
      const { UserPassword } = this.state;
      const { UserPhoneNumber } = this.state;

      if (UserName === '' || UserFullName === '' || UserEmail === '' || UserPassword === '' ||
        UserPhoneNumber === '') {
          Alert.alert('Harap isi semua data yang diperlukan!');
      }
      else {
        fetch('http://202.74.236.63/travellingqu/user_pengguna/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({     
            idklpuserpengguna: UserGroup,    
            nmuserpengguna: UserFullName,
            username: UserName,
            passwd: UserPassword,
            email: UserEmail,
            nohp: UserPhoneNumber
          })
        }).then((response) => response.text())
        .then((responseJson) => {
          // Showing response message coming from server after inserting records.
          Alert.alert('notice: ' + responseJson);
          // jika sukses langkah selanjutnya set session agar auto login setelah register
        }).catch((error) => {
          Alert.alert(`error: ${error}`);
        });
      }
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
                  placeholder='Enter Full Name' 
                  onChangeText={UserFullName => this.setState({ UserFullName })}
                />
              </Item>
              <View style={styles.separator} />
              <Item rounded style={{ marginLeft: 10, marginRight: 10, }}>
                <Input 
                  placeholder='Enter User Email' 
                  onChangeText={UserEmail => this.setState({ UserEmail })}
                />
              </Item>
              <View style={styles.separator} />
              <Item rounded style={{ marginLeft: 10, marginRight: 10, }}>
                <Input 
                  placeholder='Enter User Password' 
                  onChangeText={UserPassword => this.setState({ UserPassword })}
                  secureTextEntry
                />
              </Item>
              <View style={styles.separator} />
              <Item rounded style={{ marginLeft: 10, marginRight: 10, }}>
                <Input 
                  placeholder='Enter Phone Number' 
                  onChangeText={UserPhoneNumber => this.setState({ UserPhoneNumber })}
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
                onPress={this.UserRegistrationFunction}

              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Register</Text>
              </Button>
              <View style={styles.separator} />
              <View style={styles.separator} />
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <Text>
                  Sudah punya akun?&nbsp;
                </Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Login')}
                >
                  <Text style={{ fontWeight: 'bold', color: values.colors.primary }}>
                    Login Sekarang
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
        justifyContent: 'flex-start',
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
