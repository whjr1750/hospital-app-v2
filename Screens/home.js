import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  ImageBackground
} from 'react-native';
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;

import {Header}from 'react-native-elements';

class Home extends React.Component {
  render() {
    return (
      <View style={{marginTop:Platform.OS==="android" ? StatusBar.currentHeight:40}}>

         <Header
     centerComponent={{ 
       text:"Hospital App",
       style:{fontSize:30,color:"white"}
     }} 
     backgroundColor="#13005A" 
    
     />
<TouchableOpacity style={styles.button}onPress={()=> 
this.props.navigation.navigate("apollo")}> 
<Text style={styles.text}>Apollo</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button}onPress={()=> 
this.props.navigation.navigate("star")}>
<Text style={styles.text}>Star</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={()=>
this.props.navigation.navigate("sunshine")}>
<Text style={styles.text}>Sunshine</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button}onPress={()=>
this.props.navigation.navigate("kims")}> 
<Text style={styles.text}>Kims</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button}onPress={()=>
this.props.navigation.navigate("DDB")}>
<Text style={styles.text}>DDB</Text> 
</TouchableOpacity>
<TouchableOpacity style={styles.button}onPress={()=>
this.props.navigation.navigate("care")}> 
<Text style={styles.text}>Care</Text>
</TouchableOpacity>


      </View>
    );
  }
}
export default Home; 

var styles = StyleSheet.create({
button:{
  backgroundColor:"#13005A",
  borderRadius:45,   
  marginTop:45,  
  width:120,
  height:55,
  alignSelf:"center",     
},
text:{
  textAlign:"center",
  marginTop:15,
  fontSize:20, 
  color:"white",
}


})













