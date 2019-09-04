import React, { Component } from 'react';
import {
    Animated,
    Text,
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    ListView,
    Image,
    ImageBackground,
    Dimensions,
    Platform,
    TouchableOpacity
  } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

import * as theme from '../theme'; 

const { width, height } = Dimensions.get('window');
const content = [
    {
        id: 1,
        user: {
          name: 'Musfiratur',
          avatar: '',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        description: 'Santorini - Description',
        rating: 4.3,
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
      backgroundColor: theme.colors.blue,
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
      flex: 1,
      justifyContent: 'space-between',
      paddingBottom: 30,
    },
    destination: {
      width: width - (theme.sizes.padding * 2),
      height: width * 0.4,
      marginHorizontal: theme.sizes.margin,
      marginVertical: theme.sizes.margin / 2,
      paddingHorizontal: theme.sizes.padding,
      paddingVertical: theme.sizes.padding * 0.66,
      borderRadius: theme.sizes.radius,
      
    },
    destinationInfo: {
      position: 'absolute',
      borderRadius: theme.sizes.radius,
      paddingHorizontal: theme.sizes.padding,
      paddingVertical: theme.sizes.padding / 2,
      bottom: 20,
      left: (width - (theme.sizes.padding * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
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
      width: theme.sizes.padding * 2.5,
      height: theme.sizes.padding * 2.5,
      // margin: theme.sizes.margin / 4,
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
      backgroundColor: theme.colors.gray,
      borderColor: 'transparent',
    },
    activeDot: {
      width: 12.5,
      height: 12.5,
      borderRadius: 6.25,
      borderColor: theme.colors.active,
    },
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    }
});

class ListPaketWisata extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
        );
      })
    );
  }

  //render destinasi secara keseluruhan
  renderDestinations = () => (
      <View style={[ styles.column, styles.destinations ]}>
        <FlatList
          vertical
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow:'visible'}}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderDestination(item)}
        />
       
      </View>
    )

  // render destinasi per item
  renderDestination = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('PaketHaji', { article: item })}>
      <View style={[styles.row, { margin: theme.sizes.margin / 4 }]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri: item.preview }} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, paddingHorizontal: theme.sizes.padding / 4 }]}>
              <Text style={{ color: theme.colors.black, fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ color: theme.colors.black }}>
                <Octicons
                  name="location"
                  size={theme.sizes.font * 0.8}
                  color={theme.colors.black}
                />
                <Text> {item.location}</Text>
              </Text>
              <View
style={[
              styles.row,
              { alignItems: 'center', marginVertical: theme.sizes.margin / 2 }
            ]}>
              {this.renderRatings(item.rating)}
              <Text style={{ color: theme.colors.active }}>
                {item.rating} 
              </Text>
              <Text style={{ marginLeft: 8, color: theme.colors.caption }}>
                 ({item.reviews} reviews)
              </Text>
            </View>
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    );
  }
  render() {
    return (
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
        {this.renderDestinations()}
      </ScrollView>
    );
  }
}

ListPaketWisata.defaultProps = {
    destinations: content
  };

export default ListPaketWisata;
