import './style.css'
import { useState } from 'react';

import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App(){
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) =>{
        const result = await searchImages(term);

        setImages(result);
    };
    return <div>
        <h1>Search <span className='distinction'>Your</span> Image</h1>
        <SearchBar onSubmit ={handleSubmit}/>
        <ImageList images={images}/>
        <footer>
            coded by <a href='https://agnieszka-s-d.netlify.app/'>A.S.D.</a>
        </footer>
    </div>
}

export default App;