import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { selectRestaurant, selectedBasketItems, selectedBasketTotal } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity/sanity';
import Currency from 'react-currency-formatter';
import { removeFromBasket } from '../redux/slices/basketSlice';

const BasketScreen = () => {
  const [groupedItemBasket, setGroupedItemBasket] = useState([]);
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectedBasketItems);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const totalPrice = useSelector(selectedBasketTotal);

  useEffect(() => {
    //memoised data,
    //return results after creating an object with the key as the id and group each item in an array based on the key
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemBasket(groupedItems);
  }, [items]);
  // console.log(restaurant);
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.heading}>Basket</Text>
          <Text style={styles.normalText}>{restaurant.title}</Text>
        </View>
        <TouchableOpacity style={styles.closeContainer} onPress={() => navigation.goBack()}>
          <Icon name='close' size={20} color={colours.location} />
        </TouchableOpacity>
      </View>
      <View style={styles.deliveryContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={{
              uri: 'https://res.cloudinary.com/dytnpjxrd/image/upload/v1666980804/Delivery%20app/logo-removebg-preview_jfattz.png',
            }}
          />
          <Text style={styles.normalText}>Deliver in 50 - 75 mins</Text>
        </View>
        <Text style={styles.changeText}>Change</Text>
      </View>
      <ScrollView>
        {/* get the key, value pair of the grouped items using the objcet.entries we wan to be able to use each items length */}
        {Object.entries(groupedItemBasket).map(([key, value]) => (
          <View key={key} style={styles.orderContainer}>
            <View>
              <View style={styles.flexContainer}>
                <Text style={styles.changeText}>{value.length} X</Text>
                <Image
                  style={styles.foodImage}
                  resizeMode='contain'
                  source={{
                    uri: urlFor(value[0].image).url(),
                  }}
                />
                <Text style={styles.boldText}>{value[0].name}</Text>
              </View>
            </View>
            <View style={styles.flexContainer}>
              <Text>
                <Currency quantity={value[0].price} currency='USD' />
              </Text>
              {/* on press dispatch the action to remove the item from the basket/state using the key as id */}
              <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                <Text style={styles.changeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Subtotal view */}
      <View style={styles.totalContainer}>
        <Text style={styles.normalText}>Subtotal</Text>
        <Text style={styles.normalText}>
          <Currency quantity={totalPrice} currency='USD' />
        </Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.normalText}>Delivery fee</Text>
        <Text style={styles.normalText}>
          <Currency quantity={totalPrice} currency='USD' />
        </Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.normalText}>Order total</Text>
        <Text style={styles.normalText}>
          <Currency quantity={totalPrice} currency='USD' />
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: colours.offWhite,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
    flex: 1,
  },
  headingContainer: {
    backgroundColor: colours.white,
    justifyContent: 'center',
  },
  closeContainer: {
    position: 'absolute',
    right: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colours.primary,
    textAlign: 'center',
  },
  normalText: {
    color: colours.primary,
    fontSize: 14,
    marginVertical: 4,
    textAlign: 'center',
  },
  changeText: {
    color: colours.turquoiseDark,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: colours.primary,
  },
  logo: {
    width: 30,
    height: 30,
    borderColor: colours.iconBlue,
    borderWidth: 1,
    borderRadius: 75,
    marginRight: 10,
  },
  foodImage: {
    width: 50,
    height: 50,
    borderColor: colours.iconBlue,
    borderWidth: 1,
    borderRadius: 75,
    marginHorizontal: 10,
  },
  deliveryContainer: {
    flexDirection: 'row',
    backgroundColor: colours.white,
    alignItems: 'center',
    marginVertical: 13,
    justifyContent: 'space-between',
    padding: 8,
  },
  orderContainer: {
    flexDirection: 'row',
    backgroundColor: colours.white,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: colours.offWhite,
    justifyContent: 'space-between',
    padding: 8,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colours.white,
    padding: 5,
  },
});
