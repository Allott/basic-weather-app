/* eslint-disable @next/next/no-img-element */
import { type CurrentType } from "../../../types/Weather"


// add temp humid windspeed
const Weather = ({condition, temp_c, wind_kph, pressure_mb}:CurrentType) => {
    const {icon, text} = condition;
return (
    <div className="flex flex-col items-center">
        <img src={icon} alt={`image: ${text}`} />
        <h1 className="m-2 text-xl font-semibold">{text}</h1>
    </div>
)}

export default Weather