import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
const ReloadButton = ({load}:any) => {
  return (
    <View style={style.reload}>
      <MaterialIcons onPress={load} name="refresh" size={36} color={Colors.primary_color} />
    </View>
  )
}

const style = StyleSheet.create({
    reload: {
        position: 'absolute',
        top: -10,
        right: -70,
    }
})

export default ReloadButton