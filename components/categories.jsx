import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    // horizonatal scrollview
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
      <CategoryCard imgUrl='https://res.cloudinary.com/dytnpjxrd/image/upload/v1666549301/1608236387-goalfea_efirhh.jpg' />
      <CategoryCard imgUrl='https://res.cloudinary.com/dytnpjxrd/image/upload/v1666549301/1608236387-goalfea_efirhh.jpg' />
      <CategoryCard imgUrl='https://res.cloudinary.com/dytnpjxrd/image/upload/v1666549301/1608236387-goalfea_efirhh.jpg' />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
});
