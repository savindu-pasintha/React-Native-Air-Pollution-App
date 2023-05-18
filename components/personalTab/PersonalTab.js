import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { useNavigation } from '@react-navigation/native';

const PersonalTab = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedId1, setSelectedId1] = useState();
  const [selectedId2, setSelectedId2] = useState();
  const [selectedId3, setSelectedId3] = useState();
  const [selectedId4, setSelectedId4] = useState();

  const genderRadioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Male ",
        value: "Male",
      },
      {
        id: "2",
        label: "Femal",
        value: "Female",
      },
    ],
    []
  );
  const backgroundRadioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Outdoor",
        value: "Outdoor",
      },
      {
        id: "2",
        label: "Indoor     ",
        value: "Indoor",
      },
    ],
    []
  );

  const smokingRadioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Yes",
        value: "Yes",
      },
      {
        id: "2",
        label: "No",
        value: "No",
      },
    ],
    []
  );

  const transpotationRadioButtons  = useMemo(
    () => [
      {
        id: "1",
        label: "By Foot",
        value: "Foot",
      },
      {
        id: "2",
        label: "Car/van",
        value: "Car_Van",
      },
      {
        id: "3",
        label: "Public Transport",
        value: "Public_Transport",
      },
      {
        id: "4",
        label: "Motorcycle",
        value: "Motorcycle",
      },
      {
        id: "5",
        label: "Threewheel",
        value: "Threewheel",
      },
    ],
    []
  );

  function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    let agge = currentYear - birthYear;
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      agge--;
    }
    return agge;
  }
  return (
    <View style={s.container}>
      <View style={s.col}>
        <Text style={s.label}>Name</Text>
        <TextInput style={s.input} onChange={setName} value={name}/>
      </View>

      <View style={s.row}>
        <View>
          <TouchableOpacity onPressIn={() => setOpen(!open)} >
              <Text style={s.label}>Birthday</Text>
              <TextInput editable={false}  style={s.input2}  maxLength={100} value={date.toDateString()} />
           </TouchableOpacity>
          {open && (
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || date;
                setShowPicker(Platform.OS === "ios");
                setDate(currentDate);
                const birthDate = new Date(currentDate);
                const ag = calculateAge(birthDate);
                setAge(ag)
                setOpen(!open);
              }}
              date={date}
            />
          )}
        </View>
        <View>
          <Text style={s.label}>Age</Text>
          <TextInput editable={false} style={s.input2} keyboardType="numeric" maxLength={3} value={age.toString()}
           onChange={(e)=>setAge(e)}
          />
        </View>
      </View>

      <View style={s.row}>
        <View>
          <Text style={s.label}>Gender</Text>
          <RadioGroup
            containerStyle={s.radio}
            radioButtons={genderRadioButtons}
            onPress={setSelectedId1}
            selectedId={selectedId1}
          />
        </View>
        <View>
        <Text style={s.label}>Background</Text>
          <RadioGroup
            containerStyle={s.radio}
            radioButtons={backgroundRadioButtons}
            onPress={setSelectedId2}
            selectedId={selectedId2}
          />
        </View>
      </View>

      <View style={s.col}>
       <Text style={s.label}>Smoking Status</Text>
        <RadioGroup
          containerStyle={s.radio}
          radioButtons={smokingRadioButtons}
          onPress={setSelectedId3}
          selectedId={selectedId3}
        />
      </View>

      <View>
       <Text style={s.label}>Preferred mood of transpotation</Text>
        <RadioGroup
          containerStyle={s.radio}
          radioButtons={transpotationRadioButtons}
          onPress={setSelectedId4}
          selectedId={selectedId4}
        />
      </View>
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
        <TouchableOpacity onPressIn={(e) => navigation.navigate("Health")}>
          <Text style={s.boxText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

PersonalTab.propTypes = {
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
    justifyContent:'space-between',
    paddingVertical:5,
    
  },
  col:{
    flexDirection:"column",
  },
  label:{
    fontSize:15,
    color:'black',
    paddingVertical:5,
    width:200
  },
  input:{
   borderColor:'black',
   borderWidth:1,
   borderRadius:10,
   height:40,
   fontSize:15,
   textDecorationLine:'none',
   paddingHorizontal:5
  },
  input2:{
    width:140,
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,
    height:40,
    fontSize:15,
    textDecorationLine:'none',
    paddingHorizontal:5
   },
   radio:{
    textAlign:'left',
    alignItems:'baseline',
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
export default PersonalTab;
