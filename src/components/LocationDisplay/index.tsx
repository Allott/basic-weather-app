/* eslint-disable @next/next/no-img-element */
type LocationDisplayProps = {
    name: string,
    region: string,
    country: string,
}

const LocationDisplay = ({name, region, country}:LocationDisplayProps) => <div className="flex flex-col items-center">
    <h1 className="m-2 text-xl font-semibold">{name}</h1>
    <p className="text-sm text-slate-500">{region}, {country}</p>
</div>

export default LocationDisplay