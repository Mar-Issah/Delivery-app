import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colours from '../config/colours';
import { urlFor } from '../sanity/sanity';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        style={styles.image}
        // resizeMode='cover'
        source={{
          uri: urlFor(imgUrl).url(),
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.resName}>{title}</Text>
        <View style={styles.ratingContainer}>
          <Icon name='star' size={15} color={colours.star} />
          <Text style={styles.ratingText}>
            {rating}
            <Text> - {genre}</Text>
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Icon name='map-marker' size={15} color={colours.loaction} />
          <Text style={styles.ratingText}> Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colours.white,
    borderRadius: 3,
  },
  image: {
    width: 170,
    height: 100,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  contentContainer: {
    margin: 3,
  },
  resName: {
    fontWeight: 'bold',
    color: colours.primary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  ratingText: {
    marginLeft: 5,
    color: colours.primary,
    fontSize: 10,
  },
});
