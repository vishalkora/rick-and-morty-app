import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEpisode } from '../services/api';

const EpisodeCard = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);
    useEffect(() => {
        const loadEpisode = async () => {
            try {
                const response = await fetchEpisode(id);
                setEpisode(response.data);
            } catch (error) {
                console.error('Error fetching character details', error);
            }
        };

        loadEpisode();
    }, [id]);

    if (!episode) {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 text-center p-5'>
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div class="card mt-2 text-dark">
            <div class="card-body">
                <h5 class="card-title">{episode.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Date:{episode.air_date}</h6>
                <p class="card-text">Episode:  {episode.episode}</p>
            </div>
        </div>
    );
};

export default EpisodeCard;
