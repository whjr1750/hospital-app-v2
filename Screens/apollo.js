import * as React from "react"
import {View,Text,Image,StyleSheet} from "react-native"
import { Header } from 'react-native-elements';
class Apollo extends React.Component{
  render(){
    return(
      <View>
       <Header
          
          centerComponent={{
            text: 'Apollo hospital',
            style: { color: '#fff', fontSize: 30 },
          }}
        />
        <Image
              source={require("../assets/apollo.jpg")}
              style={styles.apollo}
            ></Image>
            
      <Text style={styles.textbig}>Hyderguda, Hyderabad</Text>
      <Text style={styles.text}>contact-information : 040 4917 2579</Text> 
       <Text style={styles.textbig}>Quick-Information:-</Text>
        <Text style={styles.text}>mode of payment :Credit Card | Cash | Cheque | Online Payment | Debit Card | Insurance</Text>
        <Text style={styles.text}>number of beds : 200</Text>
           <Text style={styles.text}>Multi Speciality Hospital,27 Doctors</Text>
          <Text style={styles.text}>Timings : Mon-Sun - open 24/7</Text>
          <Text style={styles.textbig}>Adderss:-</Text> 
          <Text style={styles.text}>Plot Number 3-5-836 to 838
Landmark: Near Old MLA Quarters
Hyderguda, Hyderabad</Text>
          <Text style={styles.textbig}>"THANK YOU"</Text> 
      </View>
    )
  }
}
export default Apollo
  
var styles=StyleSheet.create({
  apollo:{
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
 

})