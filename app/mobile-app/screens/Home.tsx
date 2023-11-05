import React , {useContext} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
const width=Dimensions.get("window").width
import { ProductCartInfo } from '../contextProvider/ProductCart';
import { AmountInfo } from "../contextProvider/Amount";
export const  Home=()=> {
const {ProductCart, setProductCart } = useContext(ProductCartInfo)
const {Amount, setAmount} = useContext(AmountInfo)
console.log(ProductCart)
  return (
    <View style={styles.container}>
<Text>Home</Text>

<Pressable onPress={()=>setProductCart([1])}>
  <Text>
    change cart {Amount}
  </Text>
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
    
  },
  Card: {
    paddingVertical: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    flex: 0.3,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});
