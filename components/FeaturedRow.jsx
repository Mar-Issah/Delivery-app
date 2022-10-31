import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/FontAwesome';

const FeaturedRow = ({ title, desc }) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Icon name='arrow-right' size={15} color={colours.iconBlue} />
      </View>
      <Text>{desc}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      ></ScrollView>
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
