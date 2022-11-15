import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import colours from '../config/colours';
import { urlFor } from '../sanity/sanity';
import Icon from 'react-native-vector-icons/FontAwesome';

const RestaurantScreen = () => {
  const {
    params: { id, imgUrl, title, rating, genre, address, short_desc, dishes, long, lat },
  } = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: colours.offWhite }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          // resizeMode='cover'
          source={{
            uri: urlFor(imgUrl).url(),
          }}
        />
        <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={15} color={colours.iconBlue} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: colours.white }}>
        <View style={{ padding: 5 }}>
          <Text style={styles.restaurantName}>{title}</Text>
          <View style={styles.flexContainer}>
            <View style={styles.flexContainer}>
              <Icon name='star' size={15} color={colours.star} />
              <Text style={styles.smallText}>
                {rating}
                <Text> - {genre}</Text>
              </Text>
            </View>
            <View style={styles.flexContainer}>
              <Icon name='map-marker' size={15} color={colours.loaction} />
              <Text style={styles.smallText}> Nearby - {address}</Text>
            </View>
          </View>
          <Text style={styles.normalText}>{short_desc}</Text>
          <TouchableOpacity style={styles.allegyContainer}>
            <View style={styles.flexContainer}>
              <View style={styles.iconContainer}>
                <Icon name='question' size={10} color={colours.primary} style={styles.arrow} />
              </View>
              <Text style={styles.boldText}>Have some food Allergies?</Text>
            </View>
            <Icon name='chevron-right' size={10} color={colours.iconBlue} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  iconContainer: {
    backgroundColor: colours.turquoise,
    borderRadius: 60,
    padding: 6,
    marginRight: 4,
  },
  arrowContainer: {
    position: 'absolute',
    top: 30,
    left: 8,
    backgroundColor: colours.offWhite,
    borderRadius: 50,
    padding: 6,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.primary,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
  },
  allegyContainer: {
    width: '100%',
    borderTopWidth: 2,
    borderColor: colours.offWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginTop: 5,
  },
  smallText: {
    color: colours.primary,
    fontSize: 10,
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
});
