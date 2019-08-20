import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import values from '../values';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Main');
    }
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result'); },
        1000
      )
    );
  }
  
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.title}>
          <Image 
            source={require('../assets/icon.png')} 
            style={Styles.img} 
            resizeMode='contain'
          />
        </View>
        <View style={Styles.version}>
          <Text style={Styles.titleText}>Version 0.0.0</Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
    container: {
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
    titleText: {
      color: '#17bebb'
    },
    version: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 20,
      textDecorationColor: '#17bebb',
    },
    img: {
      width: values.DeviceWidth * 0.8,
      // height: 100,
    }
});
  
export default Splash;
