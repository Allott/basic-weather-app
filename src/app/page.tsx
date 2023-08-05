'use client'
import { useEffect } from 'react'
import getWeather from '../services/api/getWeather'

export default function Home() {

  useEffect(() => {
    getWeather('London')}, 
  [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
    </main>
  )
}
