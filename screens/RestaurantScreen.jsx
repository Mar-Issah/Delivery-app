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
    <ScrollView>
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
  arrowContainer: {
    position: 'absolute',
    top: 30,
    left: 8,
    backgroundColor: colours.offWhite,
    borderRadius: 50,
    padding: 6,
  },
  arrow: {},
});
