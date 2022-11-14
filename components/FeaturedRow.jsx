import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity/sanity';

const FeaturedRow = ({ id, title, desc }) => {
  const [restaurants, setRestaurants] = useState([]);
  //now we are going into the featured data and getting the ids of the restaurants
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured' && _id == $id]{
  					...,
						restaurants[]->{
   					 ...,
						 dishes[]->,
						 type->{
							name
						 }
  					}
					}[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data.restaurants);
      });
  }, []);

  console.log(restaurants);
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Icon name='arrow-right' size={15} color={colours.iconBlue} />
      </View>
      <Text>{desc}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.contentContainer}
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            id={restaurant._id}
            key={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant?.type?.name}
            address={restaurant.address}
            short_desc={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.lon}
            lat={restaurant.lat}
          />
        ))}
        {/* <RestaurantCard
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
        /> */}
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
