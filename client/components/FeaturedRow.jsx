import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, desc }) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Icon name='arrow-right' size={15} color={colours.iconBlue} />
      </View>
      <Text>{desc}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle={styles.contentContainer}>
        <RestaurantCard
          id={1}
          imgUrl='https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909373/samples/Japan_bhwugz.jpg'
          title='Marsiya Rest'
          rating={4.7}
          genre='Japanese'
          address='123 Main St'
          short_desc='Delicious and tasty food'
          dishes={[]}
          long={0.23}
          lat={0.45}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colours.primary,
  },
});
