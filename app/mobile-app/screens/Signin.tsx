import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import { useMutation } from "@apollo/client";
import { LOGIN_AUTH } from "../utils/gql";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalInfo } from "../contextProvider/userDetails";

const width = Dimensions.get("window").width;

export const Signin = ({navigation}: {navigation
: any}) => {
  const { userDetails, setUserDetails } = useContext(GlobalInfo);
  const navigate = useNavigation();
  let logindata = {
    email: "",
    password: "",
    rememberPassword: false,
  };

  const [loginData, setloginData] = useState(logindata);

  const [loginfun, { data }] = useMutation(LOGIN_AUTH, {
    onCompleted: async (data) => {
      if (data.authenticateUserWithPassword.__typename === 'UserAuthenticationWithPasswordSuccess') {
        setUserDetails(data.authenticateUserWithPassword);

        try {
          await AsyncStorage.setItem(
            userDetails,
            data.authenticateUserWithPassword
          );
        } catch (error) {
          console.log(error);
        }

        // navigate.navigate("Dashboard");
      } else {
        alert(
          data.authenticateUserWithPassword.__typename ===
            'UserAuthenticationWithPasswordFailure'
            ? "Invalid credentials"
            : "Something went wrong, please try again"
        );
      }
    },
  });

  const handalLogin = async () => {
    await loginfun({
      variables: {
        email: loginData.email,
        password: loginData.password,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Use your logo image */}
        <Image
            source={require('../assets/schoollogo.png')}
            style={styles.logo}
            resizeMode="contain" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            setloginData({
              ...loginData,
              email: e,
            })
          }
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            setloginData({
              ...loginData,
              password: e,
            })
          }
          placeholder="Password"
          secureTextEntry={true}
        />
       
      </View>
      <Pressable onPress={() => handalLogin()}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Signin</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Signup")} >
        <Text style={styles.signupButton}>Don't have an account? Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 20,
    padding:50
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop:180
  },
  logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
  inputContainer: {
    marginBottom: 20,
    marginTop:50
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 50,
  },
  submitButton: {
    backgroundColor: "skyblue",
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  signupButton: {
    color: "blue",
    marginTop: 10,
    textAlign: "center",
  },
});
