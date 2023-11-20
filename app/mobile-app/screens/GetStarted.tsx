import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const GetStarted = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Signin'); // Replace 'Login' with the name of your target screen
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image  source={require('../assets/schoollogo.png')} style={styles.logoImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 15,
  },
  logoImage: {
    width: '100%',
    resizeMode:'contain'
  },
});

export default GetStarted;