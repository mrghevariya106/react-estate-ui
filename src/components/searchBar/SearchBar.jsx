import { useState } from 'react';
import './searchBar.scss'

const types = ["buy", "rent"];

function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const switchType = (value) => {
        setQuery((prev) => ({ ...prev, type: value }));
    };


    return (
        <div className='searchBar'>
            <div className='type'>
                {types.map((type) => (
                    <button style={{ fontFamily: 'CP-SB' }} key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}> {type}</button>
                ))}
            </div>
            <form>
                <input style={{ fontFamily: 'CP-Italic' }} type='text' name='location' placeholder='City Location' />
                <input style={{ fontFamily: 'CP-Italic' }} type='number' name='minPrice' min={0} max={1000000} placeholder='Min Price' />
                <input style={{ fontFamily: 'CP-Italic' }} type='number' name='maxPrice' min={0} max={1000000} placeholder='Max Price' />
                <button>
                    <img src="/search.png" alt="Search" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar
