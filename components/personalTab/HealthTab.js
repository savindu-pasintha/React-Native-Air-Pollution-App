import { Text, StyleSheet, View,TouchableOpacity,Alert } from "react-native";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import React, { useState } from "react";
import CheckBox from "react-native-check-box";

const HealthTab = () => {
  const [isSelected, setSelection] = useState(false);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  return (
    <View style={s.container}>
      <View>
        <Text style={s.label}>Do you have any following health issues ?</Text>
        <CheckBox 
         value={isChecked1}
         isChecked={isChecked1}
         onClick={()=>setIsChecked1(!isChecked1)}
         style={s.checkBox}
          rightText={"Respiratory Problems"}
        />
        <CheckBox
          style={s.checkBox}
          onClick={()=>setIsChecked2(!isChecked2)}
          isChecked={isChecked2}
          rightText={"Cardiovascular Problems"}
        />
        <CheckBox
         style={s.checkBox}
         onClick={()=>setIsChecked3(!isChecked3)}
         isChecked={isChecked3}
          rightText={"Cerebrovascular Problems"}
        />
        <CheckBox
           style={s.checkBox}
           onClick={()=>setIsChecked4(!isChecked4)}
           isChecked={isChecked4}
          rightText={"Diabetes"}
        />
      </View>
      <View>
         <Text style={s.label}>
           *If you give correct details, you will get suitable personalize recommendations.
         </Text>
         <CheckBox
           style={s.checkBox}
           onClick={()=>setIsChecked5(!isChecked5)}
           isChecked={isChecked5}
          rightText={"I agree with the Privacy Agreement"}
        />
      </View>
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
         <TouchableOpacity onPressIn={(e)=>{ Alert.alert(
                    'Danger ! ?',
                    "Your risk group is High risk & active.",
                    [
                      { text: 'OK', onPress: () => console.log('OK Pressed') },
                      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    ],
                    { cancelable: false }
                  );}}>
                <Text style={s.boxText}>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

HealthTab.propTypes = {
  style: ViewPropTypes.style, 
};

const s = StyleSheet.create({
  container: {
    flex:1,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  row:{
    flexDirection:'row',
    paddingVertical:5,
    
  },
  col:{
    flexDirection:"column",
  },
  label:{
    fontSize:15,
    color:'black',
    paddingVertical:5,
    
  },
   checkBox:{
    paddingVertical:10
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
export default HealthTab;
