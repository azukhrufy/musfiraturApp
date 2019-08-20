import React from 'react';
import { Button, Alert, StyleSheet, Text, View,Dimensions } from 'react-native';

import * as theme from '../theme';
import HeaderLogo from '../assets/HeaderLogo';
import Form from 'react-native-advanced-forms'
import values from '../values';


const { width, height } = Dimensions.get('window');

export default class DetailHistory extends React.Component {
  constructor (props, ctx) {
    super(props, ctx)
 
    this.state = {
      firstName: 'Ananda',
      lastName: 'Zukhruf',
      age: '23',
      country: 'Indonesia',
      notel : '08579342***',
    }
  }
 
  render() {
    const details = this.props.navigation.getParam('details');
    const {
      firstName, lastName, age, country, notel 
    } = this.state
 
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{details.destination} ({details.status}) </Text>
          <Text>Nama</Text>
          <View style={styles.TextInputStyleClass}>
              <Text>{details.nama}</Text>
          </View>
          <Text>Asal Negara</Text>
          <View style={styles.TextInputStyleClass}>
              <Text>{this.state.country}</Text>
          </View>
          <Text>No Telp</Text>
          <View style={styles.TextInputStyleClass}>
              <Text>{this.state.notel}</Text>
          </View>
      </View>
    )
  }
 
  _onFormRef = e => {
    this.form = e
  }
 
  onChange = (values) => {
    this.setState(values)
  }
 
  onSubmit = (values) => {
    Alert.alert('Submitted: ' + JSON.stringify(values))
  }
 
  validate = (values) => {
    const ret = Object.keys(this.state).reduce((m, v) => {
      if (!values[v] || !values[v].length) {
        m[v] = Form.VALIDATION_RESULT.MISSING
      }
      return m
    }, {})
 
    if (!ret.age && isNaN(values.age)) {
      ret.age = Form.VALIDATION_RESULT.INCORRECT
    }
 
    return ret
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 30
  },
  row: {
    marginBottom: 20,
  },
  columns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  field: {
    marginRight: 10,
  },
  ageField: {
    width: 60,
  },
  button: {
    width: 80,
    marginTop: 15,
  },
  error: {
    marginTop: 10,
  },
  errorMsg: {
    color: 'red'
  }, 
  
  
  img: {
    width: values.DeviceWidth * 0.8,
    // height: 100,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold'
  },
	TextInputStyleClass: {
		textAlign: 'center',
		
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
})


