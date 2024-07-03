import { View, Text } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const UnitPicker = ({units, setUnits}:any) => {
  return (
    <View>
      <Picker selectedValue={units} onValueChange={(val)=>{
        setUnits(val)
        console.log(val);
        
        }} mode='dropdown'>
        <Picker.Item label='C&deg;' value="metrics"></Picker.Item>
        <Picker.Item label='F&deg;' value="imperial"></Picker.Item>
      </Picker>
    </View>
  )
}

export default UnitPicker