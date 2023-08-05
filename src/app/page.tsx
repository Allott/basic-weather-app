'use client'
import { useEffect } from 'react'
import getWeather from '../services/api/getWeather'
import WeatherDisplay from '../components/WeatherDisplay'
import LocationDisplay from '@/components/LocationDisplay'

export default function Home() {

  // useEffect(() => {
  //   getWeather('London')}, 
  // [])

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>
        <LocationDisplay name='London' region='City of London, Greater London' country='United Kingdom'/>
        <WeatherDisplay text='Light rain' icon='//cdn.weatherapi.com/weather/64x64/day/296.png'/>
      </div>
    </main>
  )
}
