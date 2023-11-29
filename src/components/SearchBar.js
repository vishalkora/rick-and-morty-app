import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeHolder }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div class="container-fluid search">
            <div className='row'>
                <div className='col-lg-12 d-flex justify-between-center'>
                    <input type="text" className="search-input border-bottom border-warning" onKeyPress={handleKeyPress} value={searchTerm} onChange={handleChange} placeholder={placeHolder} />
                    <button onClick={handleSearch} className='btn btn-link  text-warning'>
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
