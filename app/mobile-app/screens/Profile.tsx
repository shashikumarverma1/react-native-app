import {useContext} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
const width=Dimensions.get("window").width
import { GlobalInfo } from '../contextProvider/userDetails';
import { AgeInfo } from "../contextProvider/AgeProvider";
export const  Profile=()=> {
  const { userDetails } = useContext(GlobalInfo);
  // console.log(userDetails)
  const {age , setAge}=useContext(AgeInfo)
console.log('AgeInfo' , age , setAge)
  return (
    <View style={styles.container}>
<Text>Profile { }</Text>
<Pressable style={{padding:10 , backgroundColor:"aqua"}} onPress={()=>
setAge(age + 1)
  // console.log('clik')
  }>
<Text>Profile { AgeInfo?._currentValue.age}</Text>
</Pressable>
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
