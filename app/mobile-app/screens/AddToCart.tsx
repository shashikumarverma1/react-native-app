import React , {useContext} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
import { ProductCartInfo } from "../contextProvider/ProductCart";
const width=Dimensions.get("window").width

export const  AddToCart=({route , navigation})=> {
    const {ProductCart, setProductCart } = useContext(ProductCartInfo)
    console.log(ProductCart)
  return (
    <View style={styles.container}>
<Text>AddToCart {ProductCart?.length}</Text>
    {
        ProductCart?.map((el , ind)=>{
            return (
                <Text>{ind + 1} = {el.id}</Text>
            )
        })
    }
 <Pressable onPress={()=>navigation.navigate("PayNow" , {price:500})}>
 <Text>pay now </Text>
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
