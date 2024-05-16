import * as React from "react"
import {View,Text,StyleSheet,Image} from "react-native"
import {Header}from 'react-native-elements';
class Star extends React.Component{
render(){ 
return (
 <View>
<Header
      
       centerComponent={{  
       text:"star hospital", 
       style:{fontSize:30,color:"white"}
     }} 
     >
   </Header>
    <Image
        source={require("../assets/star.jpg")}
        style={styles.star}
    ></Image> 
    <Text style={styles.textbig}>Banjara Hills, Hyderabad</Text>
      <Text style={styles.text}>contact-information :040 4520 6002</Text> 
       <Text style={styles.textbig}>Quick-Information:-</Text>
        <Text style={styles.text}>mode of payment :Credit Card | Cash | Cheque | Debit Card | Insurance</Text>
        <Text style={styles.text}>number of beds : 136</Text>
         <Text style={styles.text}>number of ambulance : 3</Text>
           <Text style={styles.text}>Multi Speciality Hospital,43 Doctors</Text> 
          <Text style={styles.text}>Timings : Mon-Sun - open 24/7</Text>
          <Text style={styles.textbig}>Adderss:-</Text> 
          <Text style={styles.text}>8-2-596/5, Road Number 10
Landmark: Opposite To Rainbow Hospitals.
Banjara Hills, Hyderabad</Text> 
          <Text style={styles.textbig}>"THANK YOU"</Text> 
  </View>
            )
        }
    }

export default Star

var styles = StyleSheet.create({
  star:{
      width:"60%",
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
    color:"#FBA1B7"
  },
 
})
