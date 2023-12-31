import { useQuery } from "@tanstack/react-query"
import getWeather from "../../services/api/getWeather"
import Weather from "./Weather"
import Location from "./Location"
import { type WeatherType } from '../../types/Weather'
import P from "../P"

type WeatherDisplayProps = {
    location: string
}

type errorData = {
    response: {
        data: {
            error: {
                message: string
            }
        }
    }
}

const WeatherDisplay = ({ location }: WeatherDisplayProps) => {

    const { data, isLoading, isError, error } = useQuery(
        ['weather', location], 
        () => getWeather(location),
        {
            enabled: !!location,
            retry: false,
        }
    )

    if (!location) return <P text='Enter a city in the search box above' />
    if (isLoading) return <P text='Loading...' />

    if (isError) {
        const errorData: errorData = error as errorData
        return <P text={errorData?.response?.data?.error?.message || 'Something went wrong'} />
    }

    const weatherData: WeatherType = data.data;

    return (
        <div className="flex flex-col items-center">
            <Location {...weatherData.location} />
            <Weather {...weatherData.current} />
        </div>
    )
}

export default WeatherDisplay