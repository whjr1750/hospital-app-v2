import * as React from "react"
import {View,Text,StyleSheet,Image} from "react-native"
import {Header}from 'react-native-elements';
class Kims extends React.Component{
render(){ 
return (
 <View>
<Header
 centerComponent={{ 
       text:"kims hospital",
       style:{fontSize:30,color:"white"}
     }} 
     >

      
   </Header>
    <Image
        source={require("../assets/kims.jpg")}
        style={styles.kims}
    ></Image> 
             <Text style={styles.textbig}>Kondapur, Hyderabad</Text>
      <Text style={styles.text}>contact-information : 040 4520 6002</Text> 
       <Text style={styles.textbig}>Quick-Information:-</Text>
        <Text style={styles.text}>mode of payment :Credit Card | Cash | Debit Card | Insurance</Text>
        <Text style={styles.text}>number of beds : 150</Text>
         <Text style={styles.text}>number of ambulance : 2</Text>
           <Text style={styles.text}>Multi Speciality Hospital,49 Doctors</Text>
          <Text style={styles.text}>Timings : Mon-Sun - open 24/7</Text>
          <Text style={styles.textbig}>Adderss:-</Text> 
          <Text style={styles.text}>1-112/86, Survey Number 55/EE, Kondapur Village, Serilingampally Mandal
Landmark: Near RTO Office & Next to Andhra Bank
Kondapur, Hyderabad
</Text>
          <Text style={styles.textbig}>"THANK YOU"</Text>   
  </View>
            )
        } 
    }

export default Kims
 
var styles = StyleSheet.create({
  kims:{  
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
