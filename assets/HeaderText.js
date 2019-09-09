import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as theme from '../theme';
import values from '../values';

class HeaderText extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={[styles.flex, styles.column, styles.header]}>
            <Text style={[styles.HeaderText]}> {this.props.HeaderText} </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    flex: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    row: {
      flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    header: {
      backgroundColor: values.colors.secondary,
      paddingHorizontal: theme.sizes.padding,
      paddingTop: theme.sizes.padding * 0.56,
      paddingBottom: theme.sizes.padding * 0.56,
      justifyContent: 'space-between',
    //   alignItems: 'center',
      // marginBottom: theme.sizes.margin,
    },
    HeaderLogo: {
      width: values.HeaderLogo.width,
      height: values.HeaderLogo.height,
      overflow: 'visible',
    },
    HeaderText: {
      width: values.HeaderLogo.width,
    //   height: values.HeaderLogo.height,
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
    //   marginTop: 5,
    }
});

export default HeaderText;
