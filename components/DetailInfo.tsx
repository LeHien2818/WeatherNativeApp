import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const {primary_color, secondary_color ,border_color} = Colors
const DetailInfo = ({weather}:any) => {
    const {main: {feels_like, humidity}} = weather

  return (
    <View style={styles.details}>
        <View style={styles.row}>
            <View style={{...styles.cell, borderWidth: 1, borderRightColor: border_color}}>
                <View style={{...styles.row, gap: 50}}>
                    <FontAwesome5 name="temperature-low" size={25} color={primary_color}/>
                    <View style={styles.item}>
                        <Text>Feels like:</Text>
                        <Text style={{color: Colors.secondary_color, fontWeight: 'bold'}}>{feels_like}</Text>
                    </View>
                </View>
            </View>
            <View style={{...styles.cell, borderWidth: 1, borderLeftColor: border_color}}>
                <View style={{...styles.row, gap: 50}}>
                    <MaterialCommunityIcons name="water" size={30} color={primary_color}/>
                    <View style={styles.item}>
                        <Text>Humidity: </Text>
                        <Text style={{color: Colors.secondary_color, fontWeight: 'bold'}}>{humidity}</Text>
                    </View>
                </View>
            </View>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    details: {
        marginTop: 'auto',
        margin: 16,
        borderWidth: 1,
        borderColor: border_color,
        borderRadius: 10,
        width: 400
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cell: {
        flex: 1,
        padding: 20
    },
    item:{
        position: 'relative',
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        right: -10
    }
})

export default DetailInfo