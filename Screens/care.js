import * as React from "react"
import {View,Text,StyleSheet,Image} from "react-native"
import {Header}from 'react-native-elements';
class Care extends React.Component{
render(){ 
return (
 <View>
<Header
 
       centerComponent={{  
       text:"Care hospital",
       style:{fontSize:30,color:"white"}
     }} 
     >
   </Header>
    <Image
        source={require("../assets/care-musheerabad.png")}
        style={styles.care} 
    ></Image>   
    
<Text style={styles.textbig}>Gachibowli, Hyderabad</Text>
      <Text style={styles.text}>contact-information :040 4917 1962</Text> 
       <Text style={styles.textbig}>Quick-Information:-</Text>
        <Text style={styles.text}>mode of payment :Credit Card | Cash | Online Payment | UPI</Text>
        <Text style={styles.text}>number of beds : 250</Text>
           <Text style={styles.text}>Multi Speciality Hospital,41 Doctors</Text> 
          <Text style={styles.text}>Timings : Mon-Sun - open 24/7</Text> 
          <Text style={styles.textbig}>Adderss:-</Text> 
          <Text style={styles.text}>Plot Number 48 to 51, Old Mumbai Hwy, Jayabheri Pine Valley   
Landmark: Near Hyberabad Police Commissionerate
Gachibowli, Hyderabad</Text>                            
          <Text style={styles.textbig}>"THANK YOU"</Text>   
  </View>
            )
        } 
    }

export default Care 

var styles = StyleSheet.create({
  care:{
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
    color:"#35155D"
  },
 
})
