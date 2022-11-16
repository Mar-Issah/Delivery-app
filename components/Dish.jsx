import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import colours from '../config/colours';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity/sanity';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemId } from '../redux/slices/basketSlice';

const Dish = ({ id, name, image, description, price }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemId(state, id));
  //insted of useSelector((state) => state.basket.items);
  //useSlector fxn accepts the state this way we can pass in the state and id in the call back fxn
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, image, description, price }));
    //dispatch this action to the store together with this payload
  };

  const removeItemFromBasket = () => {
    if (items.length === 0) return;
    dispatch(removeFromBasket({ id }));
    //pass in the id as payload
  };
  return (
    <>
      <TouchableOpacity
        style={{ borderBottomWidth: 2, borderColor: colours.offWhite }}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View style={styles.container}>
          <View style={{ width: '60%' }}>
            <Text style={styles.boldText}>{name}</Text>
            <Text style={styles.normalText}>{description}</Text>
            <Text>
              <Currency quantity={price} currency='USD' />
            </Text>
          </View>
          <View>
            <Image
              style={styles.image}
              resizeMode='cover'
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
            <Icon
              name='minus-circle'
              size={23}
              color={items.length === 0 ? colours.primary : colours.location}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.boldText}>{items?.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <Icon name='plus-circle' size={23} color={colours.iconBlue} style={styles.arrow} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Dish;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colours.white,
    alignItems: 'center',
    paddingVertical: 7,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    paddingVertical: 3,
    justifyContent: 'space-evenly',
  },
  normalText: {
    color: colours.primary,
    fontSize: 14,
    marginVertical: 4,
  },
  boldText: {
    fontWeight: 'bold',
    color: colours.primary,
  },
  image: {
    width: 80,
    height: 50,
    borderRadius: 3,
  },
});
