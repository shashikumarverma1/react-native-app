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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { GlobalInfo } from "../contextProvider/userDetails";

const width = Dimensions.get("window").width;

export const Signup = () => {
  const { setUserDetails } = useContext(GlobalInfo);
  const navigate = useNavigation();
  let signupData = {
    userName: "",
    mobileNumber: "",
    email: "",
    password: "",
  };

  const [signupFormData, setSignupFormData] = useState(signupData);

  const handleSignup = async () => {
    // Implement your signup logic here
    // Example: useMutation to send signup data to your GraphQL server
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Use your logo image */}
        <Image
          source={require("../assets/schoollogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            setSignupFormData({
              ...signupFormData,
              userName: e,
            })
          }
          placeholder="User Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            setSignupFormData({
              ...signupFormData,
              mobileNumber: e,
            })
          }
          placeholder="Mobile Number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            setSignupFormData({
              ...signupFormData,
              email: e,
            })
          }
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            setSignupFormData({
              ...signupFormData,
              password: e,
            })
          }
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <Pressable onPress={() => handleSignup()}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Signup</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 20,
    padding: 50,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 180,
  },
  logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 50,
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
});
