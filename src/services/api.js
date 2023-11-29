import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = (page, name = '') => {
    const url = `${BASE_URL}/character/?page=${page}&name=${name}`;
    return axios.get(url);
};

export const fetchCharacter = (id) => {
    const url = `${BASE_URL}/character/${id}`;
    return axios.get(url);
};
export const fetchLocations = (page, name = '') => {
    const url = `${BASE_URL}/location/?page=${page}&name=${name}`;
    return axios.get(url);
};

export const fetchEpisodes = (page, name = '') => {
    const url = `${BASE_URL}/episode/?page=${page}&name=${name}`;
    return axios.get(url);
};

export const fetchLocation = (id) => {
    const url = `${BASE_URL}/location/${id}`;
    return axios.get(url);
};

export const fetchEpisode = (id) => {
    const url = `${BASE_URL}/episode/${id}`;
    return axios.get(url);
};


