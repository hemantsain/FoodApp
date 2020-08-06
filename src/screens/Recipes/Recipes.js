import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  ImageBackground,
} from 'react-native';
import {Styles} from '../../styles';
import {IMAGES} from '../../common/images';

const TOP_DATA = [
  {
    id: 1,
    title: 'Breakfast',
    subTitle: 'Start your day right',
    image: IMAGES.recipe1,
  },
  {
    id: 2,
    title: 'Vegetarian',
    subTitle: 'Power Vegatables',
    image: IMAGES.recipe2,
  },
  {
    id: 3,
    title: 'Non Veg',
    subTitle: 'Heavy Protien',
    image: IMAGES.recipe3,
  },
  {
    id: 4,
    title: 'Chinese',
    subTitle: 'Yum Yum',
    image: IMAGES.recipe4,
  },
  {
    id: 5,
    title: 'Lunch',
    subTitle: 'Enjoy Indian',
    image: IMAGES.recipe5,
  },
];

export default function Recipes(props) {
  const renderTopCategoriesItem = ({item}) => {
    return (
      <View style={{...Styles.roundedBoxContainer, marginVertical: 14}}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          style={{...Styles.roundedBoxContainer, height: 180}}>
          <View style={Styles.innerViewStyle}>
            <Text style={Styles.subTitleStyle}>
              {item.subTitle.toUpperCase()}
            </Text>
            <Text style={Styles.titleStyle}>{item.title}</Text>
          </View>
        </ImageBackground>
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
