import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/api';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const loadCharacters = async () => {
        try {
            const response = await fetchCharacters(page, searchTerm);
            setCharacters(response.data.results);
        } catch (error) {
            console.error('Error fetching characters', error);
        }
    };

    useEffect(() => {
        loadCharacters();
    }, [page, searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setPage(1); // Reset page when searching
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-xs-12 text-center my-4'>
                    <h2 style={{ fontSize: "100px", fontWeight: "800" }}>The Rick and Morty App</h2>
                </div>
                <div className='col-lg-12 col-md-12 col-xs-12 mb-3'>
                    <SearchBar onSearch={handleSearch} placeHolder='Search Character...' />
                </div>
            </div>
            <div className='row bg-dark'>
                {characters.map((character) => (
                    <div className='col-lg-6 col-md-6 col-xs-6'>
                        <CharacterCard key={character.id} character={character} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharactersPage;
