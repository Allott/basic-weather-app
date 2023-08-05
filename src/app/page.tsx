'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WeatherDisplay from '../components/WeatherDisplay'

export default function Home() {

  const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
      }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col items-center justify-between min-h-screen p-10 md:p-24">
        <WeatherDisplay location="London" />
      </main>
    </QueryClientProvider>
  )
}
