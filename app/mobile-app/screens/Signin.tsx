import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  TextInput,
} from "react-native";
const width = Dimensions.get("window").width;
import { ProductCartInfo } from "../contextProvider/ProductCart";
import { AmountInfo } from "../contextProvider/Amount";
import { useMutation } from "@apollo/client";
import { LOGIN_AUTH } from "../utils/gql";
import { useNavigation } from "@react-navigation/native";
import { GlobalInfo } from "../contextProvider/userDetails";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const Signin = () => {
    const { userDetails ,setUserDetails } = useContext(GlobalInfo);
    const navigate=useNavigation()
  let logindata = {
    email: "",
    password: "",
  };

  console.log("userDetails" , userDetails , setUserDetails)
  const [loginData, setloginData] = useState(logindata);

  const [loginfun, { data }] = useMutation(LOGIN_AUTH, {
    onCompleted:async(data)=> {
    
      console.log(data.authenticateUserWithPassword);
      if(data.authenticateUserWithPassword.__typename=='UserAuthenticationWithPasswordSuccess'){
        setUserDetails(data.authenticateUserWithPassword)
        try {
            await AsyncStorage.setItem(
             userDetails,data.authenticateUserWithPassword
            );
          } catch (error) {
            console.log(error)
          }
          AsyncStorage.getItem(userDetails)
//    navigate.navigate("Dashboard")

      }
     
       if(data.authenticateUserWithPassword.__typename=='"UserAuthenticationWithPasswordFailure"'){
        alert("invalid credentiel")
        } else{
        alert("something went wrong please try again")
      }
   
    },
  });
  
  console.log(loginData);
  const handalLogin = async() => {
    console.log("login");
   await loginfun({
      variables: {
        email: loginData.email,
        password: loginData.password,
      },
    });
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View
      // style={{flex:1 , justifyContent:'center'}}
      >
        <TextInput
          // style={styles.input}
          onChangeText={(e) =>
            setloginData({
              ...loginData,
              email: e,
            })
          }
          // value={number}
          placeholder="email"
          keyboardType="email-address"
        />
        <TextInput
          // style={styles.input}
          onChangeText={(e) =>
            setloginData({
              ...loginData,
              password: e,
            })
          }
          // value={number}
          placeholder="password"
          keyboardType="default"
        />
      </View>
      <Pressable onPress={() => handalLogin()}>
        <Text
          style={{
            textAlign: "center",
            color: "red",
            backgroundColor: "green",
            padding: 15,
          }}
        >
          submit
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    paddingTop: 20,
    // height:'110%',
  },
  menuItem: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  Card: {
    paddingVertical: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    flex: 0.3,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});
