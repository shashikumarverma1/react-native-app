
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
const width=Dimensions.get("window").width
import { useNavigation } from '@react-navigation/native';
export const  Menu=({menu , setMenu})=> {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
 <Pressable onPress={()=> setMenu(false)}>
 <Text style ={[{marginLeft:width/2.5} , styles.menuItem , {marginLeft:'auto' , marginTop:10, marginRight:20}]}>X</Text>
 </Pressable>
 <Pressable onPress={()=>navigation.navigate("Home")}>
 <Text style={styles.menuItem}>Home</Text>
 </Pressable>
 <Pressable onPress={()=>navigation.navigate("About")}>
 <Text style={styles.menuItem}>About</Text>
 </Pressable>
 <Pressable onPress={()=>navigation.navigate("Profile")}>
 <Text style={styles.menuItem}>Profile</Text>
 </Pressable>
 <Pressable onPress={()=>setMenu(false)}>
 <Text style={[styles.menuItem , {marginLeft:'auto', marginRight:20}]}>close</Text>
 </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: width / 1.4,
    paddingTop:20,
    height:'110%',
  position:'relative',
  top:-65,
  left:-50,
  backgroundColor: 'grey',
    marginLeft:50 ,
    
  },
  menuItem:{
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:10,
    padding:6
    
  }
});
