import { type LocationType } from "../../../types/Weather"
import P from "../../P"

const Location = ({name, region, country}:LocationType) => <div className="flex flex-col items-center">
    <h1 className="m-2 text-xl font-semibold text-gray-700">{name}</h1>
    <P text={`${region}, ${country}`} />
</div>

export default Location