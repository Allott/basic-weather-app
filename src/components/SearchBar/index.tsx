import {debounce} from 'debounce'

type SearchBarProps = {
    setSearch: (search: string) => void
}

const SearchBar = ({setSearch}: SearchBarProps) => {

const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setSearch(value)
}, 1000)


return (
        <input 
            type="text" 
            className="w-full border-2 rounded" 
            placeholder="Enter a location" 
            onChange={onChange}
        />
    )
}

export default SearchBar