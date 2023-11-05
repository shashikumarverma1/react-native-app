import React , {useContext, useState} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { AmountInfo } from "../contextProvider/Amount";
import Ionicons from '@expo/vector-icons/Ionicons';
export const  AddMoney=({navigation})=> {
const [num, setnum]=useState(0)
const {Amount, setAmount} = useContext(AmountInfo)
// console.log(num + 1)
  return (
    <View style={[styles.container, {
      display:'flex' , justifyContent:'center' , flexDirection:'row', alignItems:'center'
    }]}>
    
{/* <Text style={{textAlign:'center'}}>AddMoney</Text> */}
<View>
<Text style={{paddingTop:20}}>Current Amoun : {Amount}</Text>
<TextInput
        style={{padding:15, textAlign:'center' ,}}
        onChangeText={(e)=>setnum(parseInt(e))}
        value={`${num}`}
        placeholder="Enter Amount"
        keyboardType="numeric"
      />
<Pressable onPress={()=>{setAmount(Amount + num)
setnum(0)
}}>
   <Text style={{ backgroundColor:'aqua', textAlign:'center' , borderRadius:5, }}><Ionicons name="add-outline" size={25} color="" /></Text>
</Pressable>
<Pressable onPress={()=>navigation.navigate('Dashboard')}>
    <Text style={{backgroundColor:'green' , color :'#FFFFFF' ,textAlign:'center' , fontSize:20, marginTop:10, borderRadius:10 , padding:8}}>Go back</Text>
</Pressable>
</View>
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
