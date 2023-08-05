/* eslint-disable @next/next/no-img-element */
type WeatherDisplayProps = {
    text: string,
    icon: string
}

const WeatherDisplay = ({text, icon}:WeatherDisplayProps) => <div className="flex flex-col items-center">
    <img src={icon} alt={`image: ${text}`} />
    <h1 className="m-2 text-xl font-semibold">{text}</h1>
</div>

export default WeatherDisplay