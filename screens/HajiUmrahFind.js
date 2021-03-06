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
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Item, Input, Icon,Form, Card, CardItem,Body } from 'native-base';
import * as theme from '../theme';
import values from '../values';
import HeaderLogo from '../assets/HeaderLogo';
import NumberFormat from 'react-number-format';
// import { Input, ThemeConsumer } from 'react-native-elements';

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

  static navigationOptions = {
    header: (
      <HeaderLogo />
    )
  }


  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor={values.colors.secondary}
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
       <Container style={styles.tema}>
          <Content style={styles.wrapper} >
            <Card style={[styles.Cardwrapper, { borderRadius: 8 } ]}>
              <Item>
                <Icon 
                active 
                name='search'
                style={{color : theme.colors.caption}} />
                <Input 
                placeholder='Cari Paket Haji atau Umrah'
                placeholderTextColor={theme.colors.caption} />
              </Item>

              <View style={{marginVertical: theme.sizes.margin/2, flexDirection : 'row', justifyContent: 'space-between' }}>
                <View style={{flexDirection : 'column'}}>
                  <Text style={[styles.instructions, {color : theme.colors.caption}]}>Harga Minimal</Text>
                  <Slider
                    style={{ width: width/3 }}
                    step={1000000}
                    minimumValue={12000000}
                    maximumValue={100000000}
                    value={this.state.minval}
                    onValueChange={val => this.setState({ minval: val })}
                    onSlidingComplete={val => this.getVal(val)}
                  />
                  
                  
                  <Text style={[styles.welcome,{color : values.colors.primary}]}>
                    <NumberFormat value={this.state.minval} displayType={'text'} thousandSeparator={true}  renderText={value => <Text>{value}</Text>} prefix={'Rp.'} />
                  </Text> 
                </View>
                <View style={{flexDirection : 'column'}}>
                  <Text style={[styles.instructions, {color : theme.colors.caption}]}>Harga Maksimal</Text>
                  <Slider
                    style={{ width: width/3, alignItems: 'flex-end' }}
                    step={1000000}
                    minimumValue={12000000}
                    maximumValue={100000000}
                    value={this.state.maxval}
                    onValueChange={maval => this.setState({ maxval: maval })}
                    onSlidingComplete={maval => this.getVal(maval)}
                  />
                  <Text style={[styles.welcome,{color : values.colors.primary}]}>
                    <NumberFormat value={this.state.maxval} displayType={'text'} thousandSeparator={true}  renderText={value => <Text>{value}</Text>} prefix={'Rp.'} />
                  </Text> 
                </View> 
            </View>

            <Text style={styles.welcome}>Durasi</Text>
          <Picker
            selectedValue={this.state.lenghtday}
            style={{ height: height/10, width: width - theme.sizes.margin*2 }}
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
            style={{ height: height/10, width: width - theme.sizes.margin*2 }}
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
              color= {values.colors.secondary}
              title="Cari Paket"
              onPress={() => this.props.navigation.navigate('ListHaji')}
            />
            </Card>
          </Content>
        </Container>
      </ScrollView>
      </View>
    );
  }
}
