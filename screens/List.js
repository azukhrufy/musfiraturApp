import React, { Component } from 'react';
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

import * as theme from '../theme';
import values from '../values';
import HeaderLogo from '../assets/HeaderLogo';

const { width, height } = Dimensions.get('window');
const mocks = [
  {
    id: 1,
    user: {
      name: 'Musfiratur',
      avatar: '',
    },
    saved: true,
    location: 'Kaaba, Makkah',
    temperature: 34,
    title: 'Dapatkan Discount 30 %',
    description: 'Dalam rangka ulang tahun Musfiratur yang ke 20 tahun, kali ini Musfiratur mengadakan promo besar - besaran dalam rangka merayakan ulangtahunnya kali ini.',
    rating: 4.3,
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1540871112484-09beaca00ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1540871112484-09beaca00ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 2,
    user: {
      name: 'Musfiratur',
      avatar: '',
    },
    saved: false,
    location: 'Loutraki, Greece',
    temperature: 34,
    title: 'Loutraki',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: 4.6,
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 3,
    user: {
      name: 'Musfiratur',
      avatar: '',
    },
    saved: true,
    location: 'Santorini, Greece',
    temperature: 34,
    title: 'Santorini',
    description: 'Santorini - Description',
    rating: 3.2,
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 4,
    user: {
      name: 'musfiratur',
      avatar: '',
    },
    location: 'Loutraki, Greece',
    temperature: 34,
    title: 'Loutraki',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: 5,
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
    ]
  },
];
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
    backgroundColor: values.colors.secondary,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 0.36,
    paddingBottom: theme.sizes.padding * 0.36,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.sizes.margin,
  },
  articles: {
  },
  destinations: {
    marginTop: theme.sizes.margin/4,
    marginLeft: + (width/2),
    marginRight: + (width/2),
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 70,
  },
  destination: {
    width: width - (theme.sizes.padding * 2),
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
    
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding/2,
    bottom: 20,
    left: (width - (width - (theme.sizes.padding * 4))) / 2,
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding * 4),
  },
  menuList: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 8,
    flexDirection: 'row',
    marginHorizontal: (theme.sizes.margin) - 5,
  },
  menuItem: {
    width: 90, 
    height: 90,
    alignItems: 'center',
  },
  recommended: {
  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.padding,
  },
  recommendedList: {
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: (theme.sizes.margin * 0.5) - 5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    height: (width - (theme.sizes.padding * 2)) / 2,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: 'bold'
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
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.white,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5 ,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: values.colors.secondary,
  },
  HeaderLogo: {
    width: values.HeaderLogo.width,
    height: values.HeaderLogo.height,
    overflow: 'visible',
  },
  oval: {
    // marginTop: theme.sizes.padding * 0.66,
    marginLeft: - (width/2),
    marginRight: - (width/2),
    height:  width,
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    // borderRadius: width,
    backgroundColor: values.colors.secondary,
    marginBottom: theme.sizes.margin / 1.5,
},
});

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 1 membuat auto scroll
      sliderIndex: 0,
      maxSlider: 3,
    };
  }

  static navigationOptions = {
    header: (
      <HeaderLogo />
    )
  }
  scrollX = new Animated.Value(0);
  

  

  renderMenu = () => (
      <View>
        <View style={[styles.column, styles.menuList]}>
              <View style={[styles.column, styles.menuItem]}>
                  <Image source={require('../airplane.png')} style={{ width: 30, height: 30, }} />
                  <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                    <Text style={{ color: theme.colors.caption }} >Tiket Pesawat</Text>
                  </View>
              </View>
              <View style={[styles.column, styles.menuItem]}>
                  <Image source={require('../hotel.png')} style={{ width: 30, height: 30, }} />
                  <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                    <Text style={{ color: theme.colors.caption }} >Pesan Hotel</Text>
                  </View>
              </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('HajiUmrah')}> 
              <View style={[styles.column, styles.menuItem]}>
                  <Image source={require('../kaaba.png')} style={{ width: 30, height: 30, }} />
                  <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                    <Text style={{ color: theme.colors.caption }} >Haji / Umrah</Text>
                  </View>
              </View>
            </TouchableOpacity> 
              
        </View>

        <View style={[styles.column, styles.menuList]}>
            <TouchableOpacity activeOpacity={0.8} onPress={() =>  this.props.navigation.navigate('Other')}>
              <View style={[styles.column, styles.menuItem]}>
                    <Image source={ require('../store.png') } style={{ width: 30, height: 30, }} />
                    <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                      <Text style={{ color: theme.colors.caption }} >Lain - Lain</Text>
                    </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={() =>  this.props.navigation.navigate('HajiUmrah')}> 
              <View style={[styles.column, styles.menuItem]}>
                  <Image source={ require('../cruise.png') } style={{ width: 30, height: 30, }} />
                  <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                    <Text style={{ color: theme.colors.caption }} >Tiket Kapal</Text>
                  </View>
              </View>
            </TouchableOpacity> 
            <View style={[styles.column, styles.menuItem]}>
                  <Image source={ require('../train.png') } style={{ width: 30, height: 30, }} />
                  <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                    <Text style={{ color: theme.colors.caption }} >Tiket Kereta</Text>
                  </View>
              </View>
          </View>

          <View style={[styles.column, styles.menuList]}>
            <TouchableOpacity activeOpacity={0.8} onPress={() =>  this.props.navigation.navigate('PaketWisataFind')}>
              <View style={[styles.column, styles.menuItem]}>
                    <Image source={ require('../suitcase.png') } style={{ width: 30, height: 30, }} />
                    <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                      <Text style={{ color: theme.colors.caption }} >Paket Wisata</Text>
                    </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={() =>  this.props.navigation.navigate('HajiUmrah')}> 
              <View style={[styles.column, styles.menuItem]}>
                  <Image source={ require('../bus.png') } style={{ width: 30, height: 30, }} />
                  <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                    <Text style={{ color: theme.colors.caption }} >Tiket Travel</Text>
                  </View>
              </View>
            </TouchableOpacity> 
            <View style={[styles.column, styles.menuItem]}>
                  <View style={{ width: 30, height: 30, }} />
                  <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', paddingVertical: 8, }]}>
                  </View>
              </View>
          </View>
      </View>
    )

  renderRatings(rating) {
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
          />
        );
      })
    );
  }

  //step 2 membuat auto scroll
  setRef = (c) => {
    this.listRef = c;
  }

  scrollToIndex = (index, animated) => {
    this.listRef && this.listRef.scrollToIndex({ index, animated })
  }

  componentDidMount() {
    setInterval(function() {
      const { sliderIndex, maxSlider } = this.state
      let nextIndex = 0

      if (sliderIndex < maxSlider) {
        nextIndex = sliderIndex + 1
      }

      this.scrollToIndex(nextIndex, true)
      this.setState({sliderIndex: nextIndex})
    }.bind(this), 3000)
  }
  // end of step 2


  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View
style={[
        styles.flex, styles.row,
        { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
      ]}
      >
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth }]}
            />
          );
        })}
      </View>
    );
  }

  //render destinasi secara keseluruhan
  renderDestinations = () => (
      <View style={[styles.column, styles.destinations]}>
        
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={{ overflow: 'visible', height: 280 }}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
            // step 3 auto scroll
            ref={this.setRef}
            onMomentumScrollEnd={(event) => {
              let sliderIndex = event.nativeEvent.contentOffset.x ? event.nativeEvent.contentOffset.x/width : 0
              this.setState({sliderIndex})
            }}
            //end of step 3
            renderItem={({ item }) => this.renderDestination(item)}
          />
          
          {this.renderDots()}
       
      </View>
  )

  renderOval = () =>(
    <View style={styles.oval}></View>
  )

  // render destinasi per item
  renderDestination = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.preview }}
        >
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, paddingHorizontal: theme.sizes.padding / 2 }]}>
              <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>{item.user.name}</Text>
              <Text style={{ color: theme.colors.white }}>
                <Octicons
                  name="location"
                  size={theme.sizes.font * 0.8}
                  color={theme.colors.white}
                />
                <Text> {item.location}</Text>
              </Text>
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        </ImageBackground>
          <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
            <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: 8, }}>
              {item.title}
            </Text>
            <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
              <Text style={{ color: theme.colors.caption }}>
                {item.description.split('').slice(0, 50)}...
              </Text>
              <FontAwesome
                name="chevron-right"
                size={theme.sizes.font * 0.75}
                color={theme.colors.caption}
              />
            </View>
          </View>
      </TouchableOpacity>
    );
  }

  renderRecommended = () => (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View
          style={[
            styles.row,
            styles.recommendedHeader
          ]}
        >
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[styles.shadow, { overflow: 'visible' }]}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderRecommendation(item, index)}
          />
        </View>
      </View>
    )

  renderRecommendation = (item, index) => {
    const { destinations } = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View
style={[
        styles.flex, styles.column, styles.recommendation, styles.shadow, 
        index === 0 ? { marginLeft: theme.sizes.margin } : null,
        isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
      ]}
      >
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
          <View style={[styles.flex, styles.row, styles.recommendationOptions]}>
            <Text style={styles.recommendationTemp}>
              {item.temperature}℃
            </Text>
            <FontAwesome
              name={item.saved ? 'bookmark' : 'bookmark-o'}
              color={theme.colors.white}
              size={theme.sizes.font * 1.25}
            />
          </View>
        </View>
        <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
          <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
          <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
          <View
style={[
            styles.row,
            { alignItems: 'center', justifyContent: 'space-between', marginTop: theme.sizes.margin }
          ]}
          >
            {this.renderRatings(item.rating)}
            <Text style={{ color: theme.colors.active }}>
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    );
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
        <View style={styles.oval}>
          {this.renderDestinations()}
        </View>
        {this.renderMenu()}
        {this.renderRecommended()}
      </ScrollView>
      </View>
      
    );
  }
}

Articles.defaultProps = {
  destinations: mocks
};

export default Articles;

