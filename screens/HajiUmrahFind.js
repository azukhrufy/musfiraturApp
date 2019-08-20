import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ScrollView,
  Slider,
  Picker,
  Dimensions,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as theme from '../theme';
// import { Input, ThemeConsumer } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    width : width,
    height : height + (height * 0.2),
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: theme.sizes.margin/2,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputContainer: {
      marginTop: theme.sizes.margin,
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center'
  },
  inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      borderColor: '#2196F3',
      borderWidth: 1,
      flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  }
});

export default class HajiUmrahFind extends Component {
  constructor(props) {
    super(props);
    // state = {
    // },
    this.state = { 
      seacrh: '',
      minval: 12000000, 
      maxval: 100000000 
    };
  }
  getVal(val) {
    return (val);
  }
  // getVal(maval) {
  //   return (maval);
  // }


  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Icon name="search" size={30} color={theme.colors.blue} style={{ marginLeft: theme.sizes.margin * 0.3 }} />
            <TextInput
                style={styles.inputs}
                placeholder="Cari Paket Umrah, Haji"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(seacrh) => this.setState({ seacrh })} 
            />
          </View>

          <Text style={styles.instructions}>
            Harga Minimal
          </Text>
          <Slider
          style={{ width: 300 }}
          step={1000000}
          minimumValue={12000000}
          maximumValue={100000000}
          value={this.state.minval}
          onValueChange={val => this.setState({ minval: val })}
          onSlidingComplete={val => this.getVal(val)}
          />
          <Text style={styles.welcome}>
            {this.state.minval}
          </Text>   

          <Text style={styles.instructions}>
            Harga Maksimal
          </Text>
          <Slider
          style={{ width: 300 }}
          step={1000000}
          minimumValue={12000000}
          maximumValue={100000000}
          value={this.state.maxval}
          onValueChange={maval => this.setState({ maxval: maval })}
          onSlidingComplete={maval => this.getVal(maval)}
          />
          <Text style={styles.welcome}>
            {this.state.maxval}
          </Text>    

          <Text style={styles.welcome}>
            Durasi
          </Text>
          <Picker
            selectedValue={this.state.lenghtday}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ lenghtday: itemValue })
            }
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="9 Hari" value="9 Hari" />
            <Picker.Item label="13 Hari" value="13 Hari" />
            <Picker.Item label="20 Hari" value="20 Hari" />
            <Picker.Item label="Lebih dari 20 hari" value="Lebih dari 20 hari" />
          </Picker>  
        
          <Text style={styles.welcome}>
            Keberangkatan
          </Text>
          <Picker
            selectedValue={this.state.berangkat}
            style={{ height: 50, width: 300 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ berangkat: itemValue })
            }>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Agustus 2019" value="Agustus 2019" />
            <Picker.Item label="September 2019" value="September 2019" />
            <Picker.Item label="Oktober 2019" value="Okbtober 2019" />
            <Picker.Item label=" November 2019" value="November 2019" />
          </Picker>

          <Button
            style={{marginVertical: (theme.sizes.margin * 0.5) - 5}}
            title="Cari Paket Haji"
            onPress={() => this.props.navigation.navigate('ListHaji')}
          />
        </View>
      </ScrollView>
    );
  }
}
