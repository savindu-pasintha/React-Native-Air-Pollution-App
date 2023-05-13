import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,ScrollView
} from "react-native";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { useNavigation } from '@react-navigation/native';
import RecomendationCard from "../components/RecomendationCard";

const  RecommendationScreen = () => {
  const navigation = useNavigation();
  const [data,setData] = useState([{
    title:"Recommendation",
    description:"In this example, the Accordion component takes title and content as props. It uses the useState hook to manage the expanded state and the animation value. The toggleAccordion function is called when the accordion is pressed, which toggles the expanded state and animates the content height. The rotateIcon value is interpolated to rotate the icon based on the animation value."
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"This is a notification"
},{
    title:"Recommendation",
    description:"In this example, the Accordion component takes title and content as props. It uses the useState hook to manage the expanded state and the animation value. The toggleAccordion function is called when the accordion is pressed, which toggles the expanded state and animates the content height. The rotateIcon value is interpolated to rotate the icon based on the animation value."
}])
  return (
    <View style={s.container}>
      <View style={s.row1}>
        <View style={{flexDirection:'row',justifyContent:"space-between",paddingHorizontal:10,paddingTop:5}}>
         <Image source={require("../assets/cloud.jpg")} style={s.image_2} />
          <Text style={s.location}>Risk Group Status</Text>
        </View>
        <View style={s.row_1}>
          <Image source={require("../assets/logo.jpeg")} style={s.image_1} />
          <Text style={s.status}>US AQI</Text>
          <Text style={s.status}>Status</Text>
        </View>
        <View style={s.row_2}>
          <Image source={require("../assets/cloud.jpg")} style={s.image_2} />
          <Text style={s.temp}>27 *c</Text>
          <Text style={s.temp}>Colombo</Text>
        </View>
      </View>

      <View style={s.row2}>
        <Text style={s.btnPersonalizeRecommendations}>
          Personalize Recommandations
        </Text>
      </View>

      <View style={s.row3}>
        <ScrollView>
        {
          data.map((item,ind)=>(<RecomendationCard key={ind} data={item} count={ind}/>))
        }
        </ScrollView>
      </View>
    </View>
  );
};
RecommendationScreen.propTypes = {
  style: ViewPropTypes.style, 
};
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  row1: {
    flex: 3,
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
  },
});


export default RecommendationScreen