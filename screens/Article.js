import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Image, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native'

import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import NumericInput from 'react-native-numeric-input';
import NumberFormat from 'react-number-format';
import * as theme from '../theme';
import values from '../values';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    // backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    // backgroundColor: theme.colors.active,
    // borderTopLeftRadius: theme.sizes.border,
    // borderTopRightRadius: theme.sizes.border,
  },
  contentHeader: {
    backgroundColor: 'transparent',
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 2,
  },
  avatar: {
    position: 'absolute',
    top: -theme.sizes.margin,
    right: theme.sizes.margin,
    width: theme.sizes.padding * 2,
    height: theme.sizes.padding * 2,
    borderRadius: theme.sizes.padding,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  dotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 36,
    right: 0,
    left: 0
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold'
  },
  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.caption
  }
});

class Article extends Component {
  scrollX = new Animated.Value(0);

  constructor(props) {
    super(props);
    // state = {
    // },
    this.state = { 
      value: 1,
      value2 : 1,
      Price: 21000000,
      Price2: 24000000, 
    };
  }

  getVal(val) {
    return (val);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" color={theme.colors.white} size={theme.sizes.font * 1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="more-horiz" color={theme.colors.white} size={theme.sizes.font * 1.5} />
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true,
    }
  }

  renderDots = () => {
    const { navigation } = this.props;
    const article = navigation.getParam('article');
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
      <View style={[ styles.flex, styles.row, styles.dotsContainer ]}>
        {article.images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          )
        })}
      </View>
    )
  }

  renderRatings = (rating) => {
    const stars = new Array(5).fill(0);
    return (
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? 'active' : 'gray']}
            style={{ marginRight: 4 }}
          />
        )
      })
    )
  }

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam('article');

    return (
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <View style={styles.flex}>
        <View style={[styles.flex]}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
          >
            {
              article.images.map((img, index) => 
                <Image
                  key={`${index}-${img}`}
                  source={{ uri: img }}
                  resizeMode='cover'
                  style={{ width, height: width }}
                />
              )
            }
          </ScrollView>
          {this.renderDots()}
        </View>
        <View style={[styles.flex, styles.content]}>
          <View style={[styles.flex, styles.contentHeader]}>
            <Image style={[styles.avatar, styles.shadow]} source={{ uri: article.user.avatar }} />
            <Text style={styles.title}>{article.title}</Text>
            <View style={[
                    styles.row,
                    { alignItems: 'center', marginVertical: theme.sizes.margin / 2 }
                  ]}>
                    {this.renderRatings(article.rating)}
                    <Text style={{ color: theme.colors.active }}>
                      {article.rating} 
                    </Text>
                    <Text style={{ marginLeft: 8, color: theme.colors.caption }}>
                      ({article.reviews} reviews)
                    </Text>
             </View>
           
            <Tabs 
            
            renderTabBar={()=> <ScrollableTab />}>
                <Tab heading="Deskripsi">
                  <Text style={styles.description}>
                  {/* {article.description.split('').slice(0, 180)}... */}
                  {article.description}
                  {/* <Text style={{color: theme.colors.active}}> Read more</Text> */}
                  </Text>
                </Tab>
                <Tab heading="Itinerary">
                <Text style={styles.description}>
                  {/* {article.description.split('').slice(0, 180)}... */}
                  {article.itinerary}
                  {/* <Text style={{color: theme.colors.active}}> Read more</Text> */}
                  </Text>
                </Tab>
                <Tab heading="Pesan Paket">
            <View style={{margin: theme.sizes.margin/2.5, flexDirection : 'row', justifyContent: 'space-between' }}>
              <Text style={[styles.description,{ color: theme.colors.black} ]}>
                Paket 1 
              </Text>
              <View style={{marginLeft: theme.sizes.margin/2.5}}>
                <NumericInput  
                  type='plus-minus'
                  value={this.state.value}
                  Price = {this.state.Price}
                  totalWidth={width/4} 
                  totalHeight={height/15} 
                  iconSize={theme.sizes.title}
                  onChange={value => this.setState({value})} /> 
              </View>
              <Text style={[styles.description,{ marginLeft: theme.sizes.margin/2.5, color: theme.colors.black} ]}>
                <NumberFormat value={this.state.value*21000000} displayType={'text'} thousandSeparator={true}  renderText={value => <Text>{value}</Text>} prefix={'Rp.'} />
              </Text>
            </View>
            <Button
              style={{margin: theme.sizes.margin/2, width : width - (theme.sizes.padding), height: width * 0.6}}
              title="Booking Paket 1"
              onPress={() => this.props.navigation.navigate('FormBookingHaji')}
              style={{marginTop: theme.sizes.margin/2}}
            />
             <View style={{margin: theme.sizes.margin/2.5, flexDirection : 'row', justifyContent: 'space-between' }}>
              <Text style={[styles.description,{ color: theme.colors.black} ]}>
                Paket 2 
              </Text>
              <View style={{marginLeft: theme.sizes.margin/2.5}}>
                <NumericInput  
                  type='plus-minus'
                  value2={this.state.value2}
                  Price2 = {this.state.Price2}
                  totalWidth={width/4} 
                  totalHeight={height/15} 
                  iconSize={theme.sizes.title}
                  onChange={value2 => this.setState({value2})} /> 
              </View>
              <Text style={[styles.description,{ marginLeft: theme.sizes.margin/2.5, color: theme.colors.black} ]}>
              <NumberFormat value={this.state.value2*30000000} displayType={'text'} thousandSeparator={true}  renderText={value => <Text>{value}</Text>} prefix={'Rp.'} />
              </Text>
            </View>
            <Button
              style={{margin: theme.sizes.margin/2, width : width - (theme.sizes.padding), height: width * 0.6}}
              title="Booking Paket 2"
              onPress={() => this.props.navigation.navigate('FormBookingHaji')}
              style={{marginTop: theme.sizes.margin/2}}
            />
            <View style={{marginTop: theme.sizes.margin, flexDirection : 'row' }}>
              <Text style={[styles.description,{ color: theme.colors.caption} ]}>
                Paket 3 
              </Text>
              <Text style={[styles.description,{ marginLeft: theme.sizes.margin, color: theme.colors.caption} ]}>
                (Paket Kosong)
              </Text>
            </View>
                </Tab>
              </Tabs>
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }
}

export default Article;
