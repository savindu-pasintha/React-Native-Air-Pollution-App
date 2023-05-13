import { View, Text ,TouchableOpacity,Alert ,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

 const NotificationCard = ({count,data}) => {
    const [open,setOpen] = useState(false)
  return (
    <View style={styles.container}>
       <TouchableOpacity >
          <View style={styles.flex}>
            <Text 
            style={styles.text}
            onPress={(e)=>{setOpen(!open)}}
            >{data?.title} {count}</Text>
            <FontAwesome style={styles.icon} name="close" size={24} color="red" onPress={(e)=>{
                 Alert.alert(
                    'Do you want delete ?',
                    data?.title + " "+ count,
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') },
                      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    ],
                    { cancelable: false }
                  );
            }}/>
        </View>
         {
            !open ? <Text style={styles.seeMoreText} onPress={(e)=>{setOpen(true)}}>see more ...</Text>
            : (<Text 
                style={styles.descriptionText}
                onPress={(e)=>{setOpen(false)}}>{data?.description}</Text>)
         }
        
       </TouchableOpacity>
    </View>
  )
}
NotificationCard.propTypes = {
  style: ViewPropTypes.style, 
};
const styles = StyleSheet.create({
    container: {
      borderRadius:5,
      backgroundColor:'white',
      padding: 10,
      marginVertical: 10,
      marginHorizontal:10,
      borderWidth:1, 
      minHeight:100,
    },
    flex:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text: {
      color: 'black',
      fontSize: 20,
      textAlign: 'left',
    },
    descriptionText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'justify',
      },
    seeMoreText:{
        color: 'grey',
        fontSize: 16,
        textAlign: 'right',
    
    }
  });
  
export default NotificationCard