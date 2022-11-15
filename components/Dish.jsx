import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import colours from '../config/colours';

const Dish = ({ id, name, image, description, price }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text style={styles.boldText}>{name}</Text>
        <Text style={styles.normalText}>{description}</Text>
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
});
