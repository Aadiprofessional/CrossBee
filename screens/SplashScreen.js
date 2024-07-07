import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Gif from 'react-native-gif';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 4000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Gif
        source={require('../assets/splash.gif')} // Replace with your GIF path
        style={styles.gif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCCC51',
  },
  gif: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
