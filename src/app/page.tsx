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
      <main className="flex flex-col items-center min-h-screen p-10 md:p-24">
        <div className='w-full max-w-lg p-2 md:p-6'>
          <SearchBar setSearch={setSearch}/>
        </div>
        <WeatherDisplay location={search} />
      </main>
    </QueryClientProvider>
  )
}
