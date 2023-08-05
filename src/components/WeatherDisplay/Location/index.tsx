import { type LocationType } from "../../../types/Weather"

const Location = ({name, region, country}:LocationType) => <div className="flex flex-col items-center">
    <h1 className="m-2 text-xl font-semibold">{name}</h1>
    <p className="text-sm text-slate-500">{region}, {country}</p>
</div>

export default Location