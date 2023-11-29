import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import CharacterDetail from './components/CharacterDetail';
import LocationsPage from './pages/LocationsPage';
import LocationDetail from './components/LocationCard'; // Create this component
import EpisodesPage from './pages/EpisodesPage';
import EpisodeDetail from './components/EpisodeCard'; // Create this component
import Header from './components/comman/header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/location" element={<LocationsPage />} />
        <Route path="api/location/:id" element={<LocationDetail />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="api/episode/:id" element={<EpisodeDetail />} />
      </Routes>
    </>
  );
};

export default App;
