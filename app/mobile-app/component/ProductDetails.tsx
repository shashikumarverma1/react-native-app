import React , {useContext} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
import { ProductCartInfo } from "../contextProvider/ProductCart";
const width=Dimensions.get("window").width

export const  ProductDetails=({route , navigation})=> {
    const {ProductCart, setProductCart } = useContext(ProductCartInfo)
    const {el}=route.params
    console.log(el.id)
  return (
    <View style={styles.container}>
  <Pressable onPress={()=>{
    setProductCart([...ProductCart , el])
    navigation.navigate('AddToCart')
    }}>
    
       <Text style={{marginLeft:10 , marginBottom:20 ,marginTop:20}}>Add to cart {el?.id}</Text>
     </Pressable>
     <Pressable onPress={()=>navigation.navigate('ProductDetails' , {el})}>
     
       <Text style={{marginLeft:10}}>buy now {el?.id}</Text>
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
