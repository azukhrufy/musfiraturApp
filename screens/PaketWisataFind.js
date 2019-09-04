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

export default class PaketWisataFind extends Component {
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
        <View style={styles.tema}>
          <View style={styles.wrapper} >
            <Card style={[styles.Cardwrapper, { borderRadius: 8 } ]}>
              <Item>
                <Icon 
                active 
                name='search'
                style={{color : theme.colors.caption}} />
                <Input 
                placeholder='Cari Paket Wisata'
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

          <Text style={styles.welcome}>Tujuan</Text>
          <Picker
            selectedValue={this.state.tujuan}
            style={{ height: height/10, width: width - theme.sizes.margin*2 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ tujuan: itemValue })
            }
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Domestik" value="Domestik" />
            <Picker.Item label="Internasional" value="Internasional" />
          </Picker> 

          <Text style={styles.welcome}>
            Negara
          </Text>
          <Picker
            selectedValue={this.state.negara}
            style={{ height: height/10, width: width - theme.sizes.margin*2 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ negara: itemValue })
            }>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Indonesia" value="Indonesia" />
            <Picker.Item label="Malaysia" value="Malaysia" />
            <Picker.Item label="Thailand" value="Thailand" />
            <Picker.Item label="Vietnam" value="Vietnam" />
          </Picker>

          <Text style={styles.welcome}>
            Kota
          </Text>
          <Picker
            selectedValue={this.state.kota}
            style={{ height: height/10, width: width - theme.sizes.margin*2 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ kota: itemValue })
            }>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Bandung" value="Bandung" />
            <Picker.Item label="Surabaya" value="Surabaya" />
          </Picker>

          <Text style={styles.welcome}>
            Kategori
          </Text>
          <Picker
            selectedValue={this.state.kategori}
            style={{ height: height/10, width: width - theme.sizes.margin*2 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ kategori: itemValue })
            }>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Wisata Alam - kuliner" value="Wisata Alam - kuliner" />
            <Picker.Item label="Wisata Alam - pantai" value="Wisata Alam - pantai" />
          </Picker>

          <Text style={styles.welcome}>
            Durasi
          </Text>
          <Picker
            selectedValue={this.state.durasi}
            style={{ height: height/10, width: width - theme.sizes.margin*2 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ durasi: itemValue })
            }>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="1 hari" value="1 hari" />
            <Picker.Item label="Lebih dari 5 hari" value="Lebih dari 5 hari" />
          </Picker>

            <Button
              style={{marginVertical: (theme.sizes.margin * 0.5) - 5}}
              color= {values.colors.secondary}
              title="Cari Paket"
              onPress={() => this.props.navigation.navigate('ListPaketWisata')}
            />
            </Card>
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}
