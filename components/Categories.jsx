import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import sanityClient from '../sanity/sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'category']`).then((data) => {
      setCategories(data);
    });
  }, []);
  console.log(categories);
  return (
    // horizonatal scrollview
    //no arrow
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          imgUrl='https://res.cloudinary.com/dytnpjxrd/image/upload/v1666549301/1608236387-goalfea_efirhh.jpg'
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 10,
  },
});
