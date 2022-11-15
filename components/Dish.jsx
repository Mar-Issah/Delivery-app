import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import colours from '../config/colours';
import Currency from 'react-currency-formatter';

const Dish = ({ id, name, image, description, price }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text style={styles.boldText}>{name}</Text>
        <Text style={styles.normalText}>{description}</Text>
        <Text>
          <Currency quantity={price} currency='USD' />
        </Text>
      </View>
      <View>
        <Image
          style={styles.image}
          // resizeMode='cover'
          source={{
            uri: urlFor(image).url(),
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Dish;

const styles = StyleSheet.create({
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
    width: 200,
    height: 120,
  },
});
