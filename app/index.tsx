import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import WeatherCard from '@/components/WeatherCard'
import UnitPicker from '@/components/UnitPicker'
import { Colors } from '@/constants/Colors'
import ReloadButton from '@/components/ReloadButton'
import DetailInfo from '@/components/DetailInfo'
const WEATHER_API_KEY = '3a4f3a5fef63f97c085bbf78848a6f69'

const MainScreen = () => {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState<any>(null);
    const [unit, setUnit] = useState('metric')
    useEffect(()=>{
        loadData()
    }, [unit])

    const loadData = async() => {
        setWeather(null)
        setError(null)
        try {
            let locationPermission = await Location.requestForegroundPermissionsAsync()
            if(locationPermission.status !== 'granted') {
                setError('Permission to access location was denied')
                return;
            }
            const location = await Location.getCurrentPositionAsync()   
            const {longitude, latitude} = location.coords;

            const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=${unit}`
            
            const response = await fetch(weather_api_url)
            const data = await response.json()

            if(response.status === 200) {
                setWeather(data)
            } else {
                setError(data.message)
            }
            //console.log(data);
            //alert(longitude + ', ' + latitude)            
        }catch(err) {
            console.log(err);
            setError(err)
        }
    }

  if(weather !== null) {
    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <View style={styles.main_wrapper}>
                <UnitPicker units={unit} setUnits={setUnit}/>
                <ReloadButton load={loadData}/>
                <WeatherCard weather={weather} />
            </View>
            <DetailInfo weather={weather}/>
        </View>
    )
  } 
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary_color} />
        <Text>Waiting...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    main_wrapper: {
        marginTop: 100
    }
})

export default MainScreen