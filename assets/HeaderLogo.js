import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import * as theme from '../theme';
import values from '../values';

class HeaderLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={[styles.flex, styles.row, styles.header, ]}>
            <View>
            {/* <Text style={{ color: theme.colors.caption }}>Search for place</Text> */}
            {/* <Text style={{ fontSize: theme.sizes.font * 2, color: theme.colors.white, }}>TravellingQu</Text> */}
            <Image 
                resizeMode='cover' 
                source={require('./logo.png')} 
                style={styles.HeaderLogo}
            />
            </View>
            {/* <View>
            <Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} />
            </View> */}
        </View>
    );
  }
}


const styles = StyleSheet.create({
    flex: {
      flex: 0,
    },
    row: {
      flexDirection: 'row'
    },
    header: {
      backgroundColor: values.colors.secondary,
      paddingHorizontal: theme.sizes.padding,
      paddingTop: theme.sizes.padding * 0.36,
      paddingBottom: theme.sizes.padding * 0.36,
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginBottom: theme.sizes.margin,
    },
    HeaderLogo: {
      width: values.HeaderLogo.width,
      height: values.HeaderLogo.height,
      overflow: 'visible',
    }
});

export default HeaderLogo;
