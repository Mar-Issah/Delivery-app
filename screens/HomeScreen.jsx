import { SafeAreaView, StyleSheet, Image, Platform, StatusBar, View, Text, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  //hide the header on screen layout show
  //you can add this option in the app.js component stack but this is another option
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      {/* custon header */}
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={{
              uri: 'https://res.cloudinary.com/dytnpjxrd/image/upload/v1666980804/Delivery%20app/logo-removebg-preview_jfattz.png',
            }}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.sloganText}>Fast Delivery!</Text>
            <Text style={styles.locationText}>
              Where are you?
              <Icon name='chevron-down' size={10} color={colours.primary} />
            </Text>
          </View>
        </View>
        <Icon name='user' size={20} color={colours.iconBlue} />
      </View>
      {/* SEARCH BAR */}
      <View style={styles.inputContainer}>
        <View style={styles.searchContainer}>
          <Icon name='search' size={15} color={colours.primary} />
          <TextInput placeholder='Restuarants and cuisines' />
        </View>
        <Icon name='sliders' size={20} color={colours.iconBlue} />
      </View>
      {/* BODY/SCROLLVIEW FOR CATEGORIES */}
      <ScrollView>
        {/* categories */}
        <Categories />
        {/* Offer near you */}
        <FeaturedRow id='1' title='title' desc='description' />
        {/* tasty discounts */}
        <FeaturedRow id='2' title='title' desc='description' />
        {/* featured */}
        <FeaturedRow id='3' title='title' desc='description' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  //for android safe area view doent work
  AndroidSafeArea: {
    backgroundColor: colours.offWhite,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  logo: {
    width: 30,
    height: 30,
    borderColor: colours.iconBlue,
    borderWidth: 1,
    borderRadius: 75,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  sloganText: {
    color: colours.primary,
  },
  locationText: {
    fontWeight: 'bold',
    color: colours.primary,
    marginRight: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: colours.white,
    width: '90%',
    padding: 3,
    alignItems: 'center',
  },
});
