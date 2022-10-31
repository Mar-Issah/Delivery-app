import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl }) => {
  return (
    //when press opacity becomes lighter
    <TouchableOpacity>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{
          uri: { imgUrl },
        }}
      />
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
});
