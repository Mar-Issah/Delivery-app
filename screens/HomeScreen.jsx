import { SafeAreaView, StyleSheet, Image, Platform, StatusBar, View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import colours from '../config/colours';

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
        <Image
          style={styles.logo}
          resizeMode='contain'
          source={{
            uri: 'https://res.cloudinary.com/dytnpjxrd/image/upload/v1666980804/Delivery%20app/logo-removebg-preview_jfattz.png',
          }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.sloganText}>Fast Delivery!</Text>
          <Text style={styles.locationText}>Where are you?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  //for android safe area view doent work
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: 50,
    height: 50,
    borderColor: '#282ff7',
    borderWidth: 1,
    borderRadius: 75,
  },
  headerContainer: {
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
  },
});
