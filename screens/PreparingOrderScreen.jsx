import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import colours from '../config/colours';
import * as Animatable from 'react-native-animatable';
// import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  //after 4secs navigate the user to the delivery screen
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Image
        source={require('../assets/rider.gif')}
        animation='slideInUp'
        iterationCount={1}
        style={styles.gifImage}
      />
      <Animatable.Text animation='slideInUp' iterationCount={2} style={styles.text}>
        Please wait for restaurant to accept your order!
      </Animatable.Text>
      {/* <View>
        <Progress.Circle size={30} indeterminate={true} color='white' />
      </View> */}
    </View>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.turquoise,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifImage: {
    height: 300,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    color: colours.white,
    fontSize: 15,
  },
});
