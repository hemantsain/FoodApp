import React from 'react';
import {View, FlatList, SafeAreaView, Text, Image} from 'react-native';
import {Rating} from 'react-native-rating-element';
import {Styles, Colors} from '../../styles';
import {IMAGES} from '../../common/images';

const TOP_DATA = [
  {
    id: 1,
    name: 'Indian Tandori',
    type: 'Indian',
    image: IMAGES.recipe1,
    rating: 4,
    reviews: 150,
  },
  {
    id: 2,
    name: 'Gusteau',
    type: 'French',
    image: IMAGES.recipe2,
    rating: 3,
    reviews: 100,
  },
  {
    id: 3,
    name: 'Down Town',
    type: 'American',
    image: IMAGES.recipe3,
    rating: 4,
    reviews: 140,
  },
  {
    id: 4,
    name: 'Yum Yum Cha',
    type: 'Sushi',
    image: IMAGES.recipe4,
    rating: 2,
    reviews: 50,
  },
  {
    id: 5,
    name: 'Dharam Garam',
    type: 'Punjabi',
    image: IMAGES.recipe5,
    rating: 5,
    reviews: 180,
  },
];

export default function Restaurants(props) {
  const renderTopCategoriesItem = ({item}) => {
    return (
      <View style={{...Styles.roundedBoxContainer, marginVertical: 10}}>
        <View style={Styles.rowContainer}>
          <View style={Styles.innerViewStyle}>
            <Text style={Styles.restaurantTitleStyle}>{item.name}</Text>
            <Text style={Styles.restaurantSubTitleStyle}>{item.type}</Text>
            <View style={Styles.ratingContainer}>
              <Rating
                totalCount={5}
                size={16}
                rated={item.rating}
                readonly
                ratingColor={Colors.themeColor}
              />
              <Text style={Styles.reviewTextStyle}>{item.reviews} reviews</Text>
            </View>
          </View>
          <Image source={item.image} style={Styles.restaurantImageStyle} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={Styles.rootContainer}>
      <View style={Styles.appContainer}>
        <FlatList
          data={TOP_DATA}
          renderItem={renderTopCategoriesItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
