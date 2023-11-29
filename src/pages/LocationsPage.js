import React, { useState, useEffect } from 'react';
import { fetchLocations } from '../services/api';
import SearchBar from '../components/SearchBar';

const LocationsPage = () => {
    const [locations, setLocations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const loadLocations = async () => {
        try {
            const response = await fetchLocations(page, searchTerm);
            setLocations(response.data.results);
        } catch (error) {
            console.error('Error fetching locations', error);
        }
    };

    useEffect(() => {
        loadLocations();
    }, [page, searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setPage(1); // Reset page when searching
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h2 className='m-5'>Locations</h2>
                </div>
                <div className='col-lg-12 mb-3'>
                    <SearchBar onSearch={handleSearch} placeHolder='Search Location...' />
                </div>
            </div>
            <div className='row p-3 bg-dark'>
                {locations.map((location) => (
                    <div className='col-lg-4'>
                        <div class="card mt-2">
                            <div class="card-body">
                                <h5 class="card-title">{location.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Type:{location.type}</h6>
                                <p class="card-text">Dimension:  {location.dimension}</p>
                                Url:<a href={location.url} class="card-link text-warning">{location.url}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationsPage;
