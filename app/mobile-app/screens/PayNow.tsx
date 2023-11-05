import React , {useContext} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
import { AmountInfo } from "../contextProvider/Amount";
const width=Dimensions.get("window").width

export const  PayNow=({route , navigation})=> {
    const {Amount, setAmount} = useContext(AmountInfo)

 const {price} =route.params
 console.log(price)
  return (
    <View style={styles.container}>
<Text>PayNow</Text>
  <Text>upi</Text>
  <Text>paytm</Text>
  <Text>phonepay</Text>
 <Pressable onPress={()=>{setAmount(Amount - price)

}}>
 <Text>pay : {price} {Amount}</Text>
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
