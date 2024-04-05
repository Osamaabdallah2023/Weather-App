


export default function Search({search, setSearch, handlesearch}){
    return <div className="search-engine">
        <input
        type="text"
        placeholder="Enter City Name"
        name="search" 
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />
        <button className="search-btn" onClick={handlesearch}>Search Weather</button>
    </div>
}