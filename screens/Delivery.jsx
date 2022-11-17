import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import colours from '../config/colours';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

const Delivery = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text w style={styles.helpText}>
            Help
          </Text>
          <TouchableOpacity onPress={() => navigation('Home')}>
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
          <Text style={styles.normalText}>Your order at {} is being delivered to you!</Text>
        </View>
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
});
