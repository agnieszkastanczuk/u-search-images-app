import './SearchBar.css';
import  { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar( {onSubmit}) {
    const [term, setTerm] = useState('');


    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };


    const handleChange = (event) => {
       setTerm(event.target.value);
    };

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label><h2>Enter Search Term</h2> <FiSearch /></label>
                <input value={term} onChange={handleChange} placeholder="ex. forrest" />
            </form>
        </div>
    );
}

export default SearchBar;