import React from 'react';

import './search-box.styles.css'


//note; start with fn methods for easier
export const SearchBox = ({ onSearchChange }) => (
    <input
    className='search'
    type='search'
    placeholder='search monsters'
    onChange={ onSearchChange } 
    />

);