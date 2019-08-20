import React, { Component } from 'react';
import { View, Text, FlatList, Animated, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';

import * as theme from '../theme';
import HistoryList from '../assets/HistoryList';
import HeaderLogo from '../assets/HeaderLogo';
import values from '../values';


class History extends Component {
  static navigationOptions = {
    header: (
      <HeaderLogo />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  scrollX = new Animated.Value(0);

  renderIcon = (status) => {
    const IconComponent = Feather;
    let iconName = '';
    let iconColor = '';

    if (status === 'true') {
      iconName = 'x-circle';
      iconColor = 'red';
    } else {
      iconName = 'check-circle';
      iconColor = values.colors.primary;
    }
    return (
      <IconComponent 
        style={{ right: 0 }}
        name={iconName} 
        size={30} color={iconColor} 
      />
    );
  }
  

  renderHistory = (item) => {
    return (
        <TouchableOpacity 
          activeOpacity={0.5}
          onPress={() => this.props.navigation.push('DetailHistory', { details: item })}
        >
          <View style={[styles.destinationInfo, styles.shadow]}>
            <View style={[styles.row]}>
              <View style={[styles.iconWrapper]}>
                {this.renderIcon(item.isCanceled)}
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text><Text style={{ fontWeight: 'bold', }}>Order ID: </Text>{item.id}</Text>
                <Text>{item.destination}</Text>
              </View>
            </View>
            
          </View>
        </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        <FlatList
          vertical
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow: 'visible', height: 280 }}
          data={this.props.list}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item, index }) => this.renderHistory(item, index)}
        />
      </ScrollView>
    );
  }
}

const width = values.DeviceWidth;
const height = values.DeviceHeight;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  destinationInfo: {
    // position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    // bottom: 20,
    marginBottom: 5,
    marginTop: 10,
    left: (width - (width - (theme.sizes.padding))) / 2,
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding),
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  iconWrapper: { 
    margin: 5,
    marginLeft: 0,
  }
});

History.defaultProps = {
  list: HistoryList
};

export default History;
