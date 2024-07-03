import { View, Text, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import WeatherCard from '@/components/WeatherCard'
import { warmUpAsync } from 'expo-web-browser'

const WEATHER_API_KEY = '3a4f3a5fef63f97c085bbf78848a6f69'

const MainScreen = () => {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState<any>(null);

    useEffect(()=>{
        loadData()
    }, [])

    const loadData = async() => {
        try {
            let locationPermission = await Location.requestForegroundPermissionsAsync()
            if(locationPermission.status !== 'granted') {
                setError('Permission to access location was denied')
                return;
            }
            const location = await Location.getCurrentPositionAsync()   
            const {longitude, latitude} = location.coords;

            const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
            
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
                <WeatherCard weather={weather} />
            </View>
        </View>
    )
  } 
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
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
    main_wrapper: {}
})

export default MainScreen