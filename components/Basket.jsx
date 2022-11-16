import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { selectedBasketItems } from '../redux/slices/basketSlice';

const Basket = () => {
  const items = useSelector((state) => selectedBasketItems(state, id));

  console.log(items);
  return (
    <View>
      <Text>Basket</Text>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({});
