import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { selectRestaurant, selectedBasketItems } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const BasketScreen = () => {
  const [groupedItemBasket, setGroupedItemBasket] = useState([]);
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectedBasketItems);

  const dispatch = useDispatch();

  useMemo(() => {
    //memoised data,
    //return results after creating an object with the key as the id and group each item in an array based on the key
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemBasket(groupedItems);
  }, [items]);
  console.log(groupedItemBasket);
  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});
