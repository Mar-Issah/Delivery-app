import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import colours from '../config/colours';
import { urlFor } from '../sanity/sanity';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    //when press opacity becomes lighter
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        style={styles.image}
        // resizeMode='cover'
        source={{
          uri: urlFor(imgUrl).url(),
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 3,
  },
  title: {
    position: 'absolute',
    bottom: '3%',
    left: 3,
    fontWeight: 'bold',
    color: colours.white,
  },
});
