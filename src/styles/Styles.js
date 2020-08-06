import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: '100%',
  },
  appContainer: {
    flex: 1,
    backgroundColor: Colors.appBgColor,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  rowContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  roundedBoxContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadowColor,
    //For Shadow in android
    elevation: 5,
    //For shadow in iOS
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
    zIndex: 5,
  },
  titleStyle: {
    fontSize: 26,
    color: Colors.white,
    fontWeight: '500',
  },
  subTitleStyle: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '300',
  },
  innerViewStyle: {
    flex: 1,
    margin: 16,
    justifyContent: 'flex-start',
  },
  restaurantTitleStyle: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },
  restaurantSubTitleStyle: {
    fontSize: 14,
    color: Colors.textColorGray,
    fontWeight: '400',
  },
  restaurantImageStyle: {
    width: 100,
    height: 80,
    borderRadius: 10,
    margin: 10,
    resizeMode: 'cover',
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  reviewTextStyle: {
    fontSize: 12,
    color: Colors.textColorGray,
    fontWeight: '300',
  },
});
