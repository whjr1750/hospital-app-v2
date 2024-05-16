import * as React from "react"
import {View,Text,StyleSheet,Image} from "react-native"
import {Header}from 'react-native-elements';
class Sunshine extends React.Component{
render(){ 
return (
 <View>
<Header
      centerComponent={{ 
       text:"sunshine hospital",
       style:{fontSize:30,color:"white"}
     }} 
     >
   </Header>
    <Image
        source={require("../assets/sunshine.jpg")}
        style={styles.sunshine}
    ></Image>   
           
      <Text style={styles.textbig}>Gachibowli, Hyderabad</Text>
      <Text style={styles.text}>contact-information : 040 4821 3515</Text> 
       <Text style={styles.textbig}>Quick-Information:-</Text>
        <Text style={styles.text}>mode of payment :Credit Card | Cash | Online Payment | Debit Card | Insurance</Text>
        <Text style={styles.text}>number of beds : 300</Text>
           <Text style={styles.text}>Multi Speciality Hospital,28 Doctors</Text>
            <Text style={styles.text}>year of establishment : 2017</Text>
          <Text style={styles.text}>Timings : Mon - Fri

09:00 AM - 07:00 PM

Sat 

09:00 AM - 10:00 PM</Text>
          <Text style={styles.textbig}>Adderss:-</Text> 
          <Text style={styles.text}>7-56/19, Dargah Road, LIG Chitrapuri Colony, Radhe Nagar, Rai Durg
Landmark: Near Vaishnoi Honda
Gachibowli, Hyderabad</Text>
          <Text style={styles.textbig}>"THANK YOU"</Text> 
  </View>
            )
        } 
    }

export default Sunshine 

var styles = StyleSheet.create({
  sunshine:{
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
    color:"#FE0000"
  },
  title:{
    textAlign:"center",
    color:"peach puff",
    fontSize:25
  }
})
