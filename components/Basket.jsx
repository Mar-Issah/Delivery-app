import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { selectedBasketItems, selectedBasketTotal } from '../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import colours from '../config/colours';
import Currency from 'react-currency-formatter';

const Basket = () => {
  const items = useSelector(selectedBasketItems);
  const totalPrice = useSelector(selectedBasketTotal);

  console.log(totalPrice);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.quantityContainer}>
        <Text style={styles.text}>Basket</Text>
      </View>

      <Text style={styles.text}>View Basket</Text>
      <Text style={styles.text}>
        {' '}
        <Currency quantity={20} currency='USD' />
      </Text>
    </TouchableOpacity>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    backgroundColor: colours.turquoise,
    borderRadius: 5,
    elevation: 20,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: colours.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  quantityContainer: {
    backgroundColor: '#75c7bd',
    padding: 5,
    borderRadius: 9,
  },
});