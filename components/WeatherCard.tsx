import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import UnitPicker from '@/components/UnitPicker'
const {primary_color, secondary_color} = Colors
const WeatherCard = ({weather}:any) => {
    const temperature = weather.main.temp
    const {
        weather: [details],
        name
    } = weather
    const {icon, main, description} = details
    const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`

    

    console.log(iconURL);
    
  return (
    <View>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
        <Image source={{uri: iconURL}} style={styles.img}/>
        <Text style={styles.text}>{temperature}&deg;</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.secondary}>{main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    text: {
        fontSize: 40,
        color: primary_color,
        marginLeft: 20
    },
    description: {
        textTransform: 'capitalize',
        fontSize: 20, 
        marginLeft: 20
    },
    secondary: {
        fontSize: 20,
        color: secondary_color,
        fontWeight: '500',
        marginTop: 10,
        marginLeft: 20
    }
})
export default WeatherCard