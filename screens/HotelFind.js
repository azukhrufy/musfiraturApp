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
    StatusBar,
    Alert 
} from 'react-native';

import { Container, Header, Content, Item, Input, Icon,Form, Card, CardItem,Body, DatePicker } from 'native-base';
import * as theme from '../theme';
import values from '../values';
import HeaderLogo from '../assets/HeaderLogo';
import NumberFormat from 'react-number-format';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  tema:{
    backgroundColor: values.colors.secondary,
  },
  wrapper: {
    flex: 1,
    // justifyContent: 'center',
    marginHorizontal: theme.sizes.margin*0.05,
    paddingHorizontal: theme.sizes.padding*0.5,
    paddingVertical: theme.sizes.padding * 0.66,
    // alignItems: 'center',
  },
  Cardwrapper: {
    flex: 1,
    // justifyContent: 'center',
    marginHorizontal: theme.sizes.margin*0.1,
    paddingHorizontal: theme.sizes.padding*0.5,
    paddingVertical: theme.sizes.padding * 0.66,
    // alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: theme.sizes.margin/6,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 20,
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
  },
  HeaderLogo: {
    width: values.HeaderLogo.width,
    height: values.HeaderLogo.height,
    overflow: 'visible',
  }
});

class HotelFind extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        chosenCheckInDate: new Date(),
        choosenCheckOutDate: new Date()
     };
    this.setCheckInDate = this.setCheckInDate.bind(this);
    this.setCheckOutDate = this.setCheckOutDate.bind(this);
  }

  setCheckInDate(newDate) {
    this.setState({ chosenCheckInDate: newDate });
  }

  setCheckOutDate(newDate) {
    this.setState({ choosenCheckOutDate: newDate });
  }

  render() {
    return (
      <View>
          <Item>
            <Icon active name='calendar' />
            {/* <Input placeholder='Icon Textbox'/> */}
          
          <DatePicker
            defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(1999, 1, 1)}
            maximumDate={new Date(2030, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setCheckInDate}
            disabled={false}
            />
            </Item>
            {/* <Text>
              Date: {this.state.chosenCheckInDate.toString().substr(4, 12)}
            </Text> */}

            <Item>
            <Icon active name='calendar' />
            {/* <Input placeholder='Icon Textbox'/> */}
                <DatePicker
                defaultDate={new Date(2019, 4, 4)}
                minimumDate={new Date(1999, 1, 1)}
                maximumDate={new Date(2030, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setCheckOutDate}
                disabled={false}
                />
            {/* <Text>
              Date: {this.state.choosenCheckOutDate.toString().substr(4, 12)}
            </Text> */}
            </Item>
      </View>
    );
  }
}

export default HotelFind;
