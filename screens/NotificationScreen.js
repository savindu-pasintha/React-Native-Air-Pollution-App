import { View, Text ,ScrollView,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import NotificationCard from '../components/NotificationCard'

const NotificationScreen = () => {
    const [data,setData] = useState([{
        title:"Notication",
        description:"In this example, the Accordion component takes title and content as props. It uses the useState hook to manage the expanded state and the animation value. The toggleAccordion function is called when the accordion is pressed, which toggles the expanded state and animates the content height. The rotateIcon value is interpolated to rotate the icon based on the animation value."
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"This is a notification"
    },{
        title:"Notication",
        description:"In this example, the Accordion component takes title and content as props. It uses the useState hook to manage the expanded state and the animation value. The toggleAccordion function is called when the accordion is pressed, which toggles the expanded state and animates the content height. The rotateIcon value is interpolated to rotate the icon based on the animation value."
    }])
  return (
    <View style={s.container}>
       <View style={s.row1}>
         <Text style={s.btnPersonalizeRecommendations}>
            Live Location Notifications
        </Text>
      </View>
      <View style={s.row2}>
      <ScrollView>
      {
        data.map((item,ind)=>(<NotificationCard key={ind} data={item} count={ind}/>))
      }
      </ScrollView>
      </View>
    </View>
  )
}
const s = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      borderRadius: 10,
      backgroundColor: "white",
    },
    row1: {
     flexDirection:'row',
      margin: 10,
      borderRadius: 10,
      backgroundColor: "white",
    },
    row2: {
     
    }, btnPersonalizeRecommendations: {
        backgroundColor: "grey",
        color: "white",
        borderRadius: 10,
        paddingTop: 15,
        textAlign: "center",
        height: 50,
        width: '100%',
      },
    
  });
export default  NotificationScreen