import * as React from "react"
import {View,Text,StyleSheet,Image} from "react-native"
import {Header}from 'react-native-elements';
class DDB extends React.Component{
render(){ 
return (
 <View>
<Header
   centerComponent={{ 
       text:"DDB hospital",
       style:{fontSize:30,color:"white"}
     }} 
>
    
      
   </Header> 
    <Image
        source={require("../assets/DDB.jpg")}
        style={styles.ddb}  
    ></Image>  
         <Text style={styles.textbig}>Vidyanagar, Hyderabad</Text>
      <Text style={styles.text}>contact-information : 040 6782 2362</Text> 
       <Text style={styles.textbig}>Quick-Information:-</Text>
        <Text style={styles.text}>mode of payment :Credit Card | Cash | Debit Card | Insurance</Text>
        <Text style={styles.text}>number of beds : 50</Text>
         <Text style={styles.text}>number of ambulance : 2</Text>
           <Text style={styles.text}>Multi Speciality Hospital,10 Doctors</Text>
         <Text style={styles.text}>year of establishment : 1953</Text>
          <Text style={styles.text}>Timings : Mon-Sun - open 24/7</Text>
          <Text style={styles.text}>Experience : 70 years of Business</Text>
          <Text style={styles.textbig}>Adderss:-</Text> 
          <Text style={styles.text}>2-1-370, Osmania University Road
Landmark: Near Hindi Maha Vidyalaya
Vidyanagar, Hyderabad</Text>
          <Text style={styles.textbig}>"THANK YOU"</Text> 
  </View>       
            ) 
        } 
    }
 
export default DDB 
 
var styles = StyleSheet.create({
 ddb:{ 
      width:"50%",
    height:200,
    alignSelf: "center",
  },
    text:{
    textAlign:"center",
    fontSize:20,
  },
  textbig:{
    textAlign:"center",
    fontSize:30,
    color:"#35155D"
  },
 
})
