import { useQuery } from "@tanstack/react-query"
import getWeather from "../../services/api/getWeather"
import Weather from "./Weather"
import Location from "./Location"
import { type WeatherType } from '../../types/Weather'

type WeatherDisplayProps = {
    location: string
}

const WeatherDisplay = ({ location }: WeatherDisplayProps) => {

    const { data, isLoading, isError } = useQuery(['weather', location], () => getWeather(location))

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error</p>

    const weatherData: WeatherType = data.data;

    return (
        <div className="flex flex-col items-center">
            <Location {...weatherData.location} />
            <Weather {...weatherData.current} />
        </div>
    )
}

export default WeatherDisplay