

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SignIn = ({ navigation }: { navigation:any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('Dashboard');
    // Replace these with your actual email and password
    const correctEmail = 'user@example.com';
    const correctPassword = 'password123';

    if (email === correctEmail && password === correctPassword) {
      // Successful sign-in
      Alert.alert('Success', 'Sign-in successful!');
    } else {
      // Incorrect email or password
      Alert.alert('Error', 'Incorrect email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
});

export default SignIn;
