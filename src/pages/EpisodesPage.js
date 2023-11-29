import React, { useState, useEffect } from 'react';
import { fetchEpisodes } from '../services/api';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const loadEpisodes = async () => {
        try {
            const response = await fetchEpisodes(page, searchTerm);
            setEpisodes(response.data.results);
        } catch (error) {
            console.error('Error fetching episodes', error);
        }
    };

    useEffect(() => {
        loadEpisodes();
    }, [page, searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setPage(1); // Reset page when searching
    };
    const handleEpisode = (url) => {
        const splitUrl = url.split('/');  //for get id 
        const id = splitUrl[splitUrl.length - 1];
        navigate(`/api/episode/${id}`);
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h2 className='m-5'>Episodes</h2>
                </div>
                <div className='col-lg-12 mb-3'>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
            <div className='row p-3 bg-dark'>
                {episodes.map((episode) => (
                    <div className='col-lg-4'>
                        <div class="card mt-2">
                            <div class="card-body">
                                <h5 class="card-title">{episode.name}</h5>
                                <p class="card-text">{episode.air_date}</p>
                                <button class="btn btn-warning" onClick={() => handleEpisode(episode.url)}>Go {episode.episode}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodesPage;
