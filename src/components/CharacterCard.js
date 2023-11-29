import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
    return (
        <div class="card m-4" >
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center">
                    <img src={character.image} alt={character.name} className='img-fluid d-block w-100' />
                </div>
                <div class="col-md-8">
                    <div class="card-body styleText">
                        <h5 class="card-title ">{character.name}</h5>
                        <p>{character.status + " - " + character.species}</p>
                        <span className='text-secondary'>Last known location:<br /><h6 className='styleText'>{character.location.name}</h6></span>
                        <Link to={`/characters/${character.id}`} className='styleText'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
