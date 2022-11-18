import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/selectors';
import MapView, { Marker } from 'react-native-maps';

const Delivery = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);
  // console.log(restaurant);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text w style={styles.helpText}>
            Help
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name='close' size={20} color={colours.location} />
          </TouchableOpacity>
        </View>
        <View style={styles.arrivalConatainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <View>
              <Text style={styles.normalText}>Estimated Time Of Arrival </Text>
              <Text style={styles.minutesText}>40 - 45 Minutes</Text>
            </View>
            <Image
              style={styles.logo}
              resizeMode='contain'
              source={{
                uri: 'https://res.cloudinary.com/dytnpjxrd/image/upload/v1666980804/Delivery%20app/logo-removebg-preview_jfattz.png',
              }}
            />
          </View>
          <Progress.Bar
            style={styles.progress}
            progress={0.1}
            width={200}
            indeterminate={true}
            color={colours.turquoiseDark}
          />
          <Text style={styles.normalText}>
            Your order at
            <Text style={styles.boldText}>{restaurant.title}</Text>
            is being delivered to you!
          </Text>
        </View>
      </SafeAreaView>
      {/* we are using expo map view component RN doesnt have one, initaila cordinates are the lat and long we pass in as props*/}
      {/* use the restaurant long and lat */}
      <View style={styles.mapContainer}>
        <MapView region={mapRegion} style={styles.map}>
          <Marker
            coordinate={mapRegion}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier='origin'
            // pinColor={'blue'}
          />
        </MapView>
      </View>
      <SafeAreaView style={styles.riderContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={{
              uri: 'https://res.cloudinary.com/dytnpjxrd/image/upload/v1666980804/Delivery%20app/logo-removebg-preview_jfattz.png',
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.boldText}>Marsiya Issah</Text>
            <Text style={styles.normalText}>Your Rider</Text>
          </View>
        </View>
        <Text style={styles.callText}>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.turquoise,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  helpText: {
    marginTop: 10,
    fontWeight: 'bold',
    color: colours.white,
    fontSize: 15,
  },
  logo: {
    width: 30,
    height: 30,
    borderColor: colours.iconBlue,
    borderWidth: 1,
    borderRadius: 75,
  },
  arrivalConatainer: {
    backgroundColor: colours.white,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    elevation: 20,
    zIndex: 10,
  },
  minutesText: {
    fontWeight: 'bold',
    color: colours.primary,
    fontSize: 25,
  },
  normalText: {
    color: colours.primary,
    fontSize: 14,
  },
  progress: {
    marginVertical: 8,
  },
  boldText: {
    fontWeight: 'bold',
    color: colours.primary,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  riderContainer: {
    backgroundColor: colours.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    alignItems: 'center',
  },
  callText: {
    color: colours.turquoiseDark,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
