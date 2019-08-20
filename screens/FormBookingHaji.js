import React from 'react'
import { Button, Alert, StyleSheet, Text, View } from 'react-native'
import Form from 'react-native-advanced-forms'
import values from '../values';
import * as theme from '../theme';
 
export default class FormBookingHaji extends React.Component {
  constructor (props, ctx) {
    super(props, ctx)
 
    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      country: null,
      notel : null,
    }
  }
 
  render() {
    const {
      firstName, lastName, age, country, notel 
    } = this.state
 
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Paket 1 : Rp.21.000.000/pak</Text>
        <Form ref={this._onFormRef} onChange={this.onChange} onSubmit={this.onSubmit} validate={this.validate}>
          <Form.Layout style={styles.row} >
            <Form.Layout style={styles.columns}>
              <Form.Field name="firstName" label="First name" style={styles.field}>
                <Form.TextField value={firstName} style={styles.TextInputStyleClass} />
              </Form.Field>
              <Form.Field name="lastName" label="Last name" style={styles.field}>
                <Form.TextField value={lastName}  style={styles.TextInputStyleClass}/>
              </Form.Field>
            </Form.Layout>
          </Form.Layout>
          <Form.Layout style={styles.row}>
            <Form.Field name="age" label="Age" style={styles.ageField}>
              <Form.TextField value={age} keyboardType='numeric' style={styles.TextInputStyleClass}/>
            </Form.Field>
          </Form.Layout>
          <Form.Layout style={styles.row}>
            <Form.Field name="country" label="Country" style={styles.field}>
              <Form.TextField value={country} style={styles.TextInputStyleClass} />
            </Form.Field>
          </Form.Layout>
          <Form.Layout style={styles.row}>
            <Form.Field name="notel" label="NoTelp" style={styles.field}>
              <Form.TextField value={notel} style={styles.TextInputStyleClass} />
            </Form.Field>
          </Form.Layout>
        </Form>
        <View style={styles.button}>
          <Button
            disabled={this.form && !this.form.canSubmit()}
            onPress={() => this.form.validateAndSubmit()}
            title="Submit"
            color="#841584"
          />
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