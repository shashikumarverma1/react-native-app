import {useContext} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
const width=Dimensions.get("window").width
import { GlobalInfo } from '../contextProvider/userDetails';
export const  Profile=()=> {
  const { userDetails } = useContext(GlobalInfo);
  console.log(userDetails)
  return (
    <View style={styles.container}>
<Text>Profile</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop:20,
    marginLeft:10,
    paddingTop:20,
    // height:'110%',
  
  },
  menuItem:{
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:10
    
  }
});
