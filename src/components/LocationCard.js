import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLocation } from '../services/api';

const LocationCard = () => {

    const { id } = useParams();
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const loadCharacter = async () => {
            try {
                const response = await fetchLocation(id);
                setLocation(response.data);
            } catch (error) {
                console.error('Error fetching character details', error);
            }
        };

        loadCharacter();
    }, [id]);


    if (!location) {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 text-center p-5'>
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>; // Or handle the case when location is not available
    }
    return (
        <div className="container-fluid bg-dark">
            <div className='row d-flex justify-content-center pt-5'>
                <div className='col-lg-8'>
                    <div className="card">
                        <div className="card-body styleText">
                            <h2 className="card-title">{location.name}</h2>
                            <p className="card-text"><strong>Type:</strong> {location.type}</p>
                            <p className="card-text"><strong>Dimension:</strong> {location.dimension}</p>
                            <p className="card-text">
                                <strong>Residents:</strong>{' '}
                                <ul className='list-group'>
                                    {location.residents.map((resident, index) => (
                                        <li key={index} className="list-group-item">
                                            <a href={`${resident}`} className='styleText'> {resident}</a>
                                        </li>
                                    ))}
                                </ul>

                            </p>
                            <p className="card-text"><strong>URL:</strong> {location.url}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
