'use client'
import {useState} from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WeatherDisplay from '../components/WeatherDisplay'
import SearchBar from '../components/SearchBar'

export default function Home() {

  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
      }
  });
  
  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col items-center justify-between min-h-screen p-10 md:p-24">
        <SearchBar setSearch={setSearch}/>
        <WeatherDisplay location={search} />
      </main>
    </QueryClientProvider>
  )
}
