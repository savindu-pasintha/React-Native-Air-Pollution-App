import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,ScrollView,TextInput,Alert
} from "react-native";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { useNavigation } from '@react-navigation/native';
import FavoriteLocationCard from "../components/FavoriteLocationCard";
import CheckBox from "react-native-check-box";
import * as Location from 'expo-location';

const  FavoriteLocationScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [cname, setCName] = useState("");
  const [isChecked1, setIsChecked1] = useState(true);
  const [data,setData] = useState([{
    title:"Favorite Location",
    description:"In this example, the Accordion component takes title and content as props. It uses the useState hook to manage the expanded state and the animation value. The toggleAccordion function is called when the accordion is pressed, which toggles the expanded state and animates the content height. The rotateIcon value is interpolated to rotate the icon based on the animation value."
},{
    title:"Favorite Location",
    description:"This is a notification"
},{
    title:"Favorite Location",
    description:"This is a notification"
},{
    title:"Favorite Location",
    description:"This is a notification"
},{
    title:"Favorite Location",
    description:"This is a notification"
},{
    title:"Favorite Location",
    description:"This is a notification"
},{
    title:"Favorite Location",
    description:"This is a notification"
},{
    title:"Favorite Location",
    description:"This is a notification"
},{
    title:"Favorite Location",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Favorite Location",
    description:"In this example, the Accordion component takes title and content as props. It uses the useState hook to manage the expanded state and the animation value. The toggleAccordion function is called when the accordion is pressed, which toggles the expanded state and animates the content height. The rotateIcon value is interpolated to rotate the icon based on the animation value."
}])


useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    let geocode = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    if (geocode.length > 0) {
      setName(geocode[0]?.name);
    }
  
  })();
}, []);
  return (
    <View style={s.container}>
      <View style={s.row1}>
      <View style={s.col}>
        <Text style={s.label}>Set the location</Text>
        <TextInput style={s.input} onChange={setName} value={name} type="text"/>
      </View>
      <View style={s.col}>
        <Text style={s.label}>Set the customer  name for this place</Text>
        <TextInput style={s.input} onChange={setCName} value={cname} type="text"/>
      </View>
        <View style={s.col}>
        <CheckBox 
         value={isChecked1}
         isChecked={isChecked1}
         onClick={()=>setIsChecked1(!isChecked1)}
         style={s.checkBox}
          rightText={"Add the favorite"}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-around',}}>
        <TouchableOpacity >
            <Text style={s.boxText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressIn={(e) =>  Alert.alert(
                    'Do you need daily notifications ?',
                    "",
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') },
                      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    ],
                    { cancelable: false }
                  )}>
            <Text style={s.boxText}>Get Tips</Text>
        </TouchableOpacity>
      </View>
      </View>

      <View style={s.row2}>
        <Text style={s.btnPersonalizeRecommendations}>
            Favorite Locations
        </Text>
      </View>

      <View style={s.row3}>
        <ScrollView>
        {
          data.map((item,ind)=>(<FavoriteLocationCard key={ind} data={item} count={ind}/>))
        }
        </ScrollView>
      </View>
    </View>
  );
};
FavoriteLocationScreen.propTypes = {
  style: ViewPropTypes.style, 
};
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  row1: {
    flex:2.5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  row2: {
    flex: 1 / 2,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: "center",
  },
  row3: {
    flex: 3,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  btnPersonalizeRecommendations: {
    backgroundColor: "grey",
    color: "white",
    borderRadius: 10,
    paddingTop: 15,
    textAlign: "center",
    height: 50,
    width: '100%',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#D6EFFF",
    borderRadius: 10,
  },
  boxText: {
    fontSize: 10,
    textAlign: "center",
    paddingTop: 45,
  },
  row_1: {
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingTop: 5,
    marginHorizontal: 10,
    borderTopWidth: 2,
    borderColor: "grey",
  },
  status: {
    textAlign: "center",
    width: 90,
    height: 50,
    backgroundColor: "#fed18c",
    marginTop: 40,
    paddingTop: 15,
    borderTopColor: "black",
    borderTopWidth: 2,
    borderRadius: 10,
  },
  row_2: {
    height: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderColor: "grey",
    paddingTop: 5,
    marginHorizontal: 10,
  },
  location: {
    borderRadius: 10,
    backgroundColor: "#fed18c",
    height: 50,
    color: "black",
    textAlign: "center",
    borderColor: "grey",
    borderTopWidth: 2,
    paddingTop: 10,
    width:285,
    fontSize:25,
    textTransform:"uppercase"
  },
  temp: {
    backgroundColor: "#fed18c",
    height: 50,
    width: 140,
    textAlign: "center",
    paddingTop: 15,
    borderTopColor: "black",
    borderTopWidth: 2,
    borderRadius: 10,
  },
  image_1: {
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  image_2: {
    borderRadius: 10,
    width: 50,
    height: 50,
  }, col:{
    flexDirection:"column",
  },
  label:{
    fontSize:15,
    color:'black',
    paddingVertical:5,
    width:'100%',
    marginHorizontal:10,
  },
  input:{
   borderColor:'black',
   borderWidth:1,
   borderRadius:10,
   height:40,
   fontSize:15,
   textDecorationLine:'none',
   paddingHorizontal:5,
   marginHorizontal:10,
   
  }, 
  checkBox:{
    paddingVertical:10,
    marginHorizontal:10,
   },
   boxText:{
    width:100,
    height:50,
    borderRadius:10,
    backgroundColor: "#D6EFFF",
    textAlign:'center',
    paddingTop:10,
    fontSize:20,
    alignItems:'center'
  }
});

export default FavoriteLocationScreen