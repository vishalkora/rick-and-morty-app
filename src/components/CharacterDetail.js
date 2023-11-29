import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCharacter } from '../services/api';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadCharacter = async () => {
            try {
                const response = await fetchCharacter(id);
                setCharacter(response.data);
            } catch (error) {
                console.error('Error fetching character details', error);
            }
        };

        loadCharacter();
    }, [id]);
    const handleOriginLocation = (url) => {
        const splitUrl = url.split('/');  //for get id 
        const id = splitUrl[splitUrl.length - 1];
        navigate(`/api/location/${id}`);
    }
    const handleEpisode = (url) => {
        const splitUrl = url.split('/');  //for get id 
        const id = splitUrl[splitUrl.length - 1];
        navigate(`/api/episode/${id}`);
    }


    if (!character) {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 text-center p-5'>
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>;
    }

    return (
        <div className="container-fluid py-5 h-100 bg-dark">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-8 mb-4 mb-lg-0">
                    <div className="card mb-3">
                        <div className="row g-0 m-5">
                            <div className="col-md-4 text-center">
                                <img src={character.image}
                                    alt="Avatar" className="img-fluid img-thumbnail d-block" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h6>{character.name}</h6>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Species</h6>
                                            <p>{character.species}</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Gender</h6>
                                            <p> {character.gender}</p>
                                        </div>
                                    </div>

                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Origin</h6>
                                            <button className=" btn btn-link p-0 m-0 styleText" onClick={() => handleOriginLocation(character.origin.url)}>{character.origin.name} {character.origin.dimension}</button>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Current Location</h6>
                                            <button className=" btn btn-link p-0 m-0 styleText" onClick={() => handleOriginLocation(character.location.url)}>{character.location.name} {character.location.dimension}
                                                {character.location.residents && (
                                                    <span> - {character.location.residents.length} residents</span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <h6>Episodes</h6>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-12 mb-3">
                                            <ul className='list-group'>
                                                {character.episode.map((episode, index) => {
                                                    const splitUrl = episode.split('/');  //for get id 
                                                    const episodeNumber = splitUrl[splitUrl.length - 1];
                                                    return <li key={index} className="list-group-item styleText" onClick={() => handleEpisode(episode)}>
                                                        Episode :  <button className=" btn btn-link p-0 m-0 styleText" onClick={() => handleEpisode(episode)}> {episodeNumber}</button>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;
