import React from 'react';
import {Search_Bar} from './assets/scss/SearchBar.scss';

function SearchBar({searchEmail}) {
    return (
        <div className={Search_Bar}>
            <input
                onChange={(e)=>searchEmail(e.target.value)}
                type='text'
                placeholder='찾기'/>
        </div>
    );
}

export default SearchBar;