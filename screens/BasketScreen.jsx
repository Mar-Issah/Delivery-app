import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { selectRestaurant, selectedBasketItems } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute, useNavigation } from '@react-navigation/native';

const BasketScreen = () => {
  const [groupedItemBasket, setGroupedItemBasket] = useState([]);
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectedBasketItems);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    //memoised data,
    //return results after creating an object with the key as the id and group each item in an array based on the key
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemBasket(groupedItems);
  }, []);
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
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: colours.offWhite,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
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
  boldText: {
    fontWeight: 'bold',
    color: colours.primary,
  },
});
