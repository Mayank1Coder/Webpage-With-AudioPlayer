import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Spotify1 from './Spotify1';
import Spotify from './Spotify';
import MultiActionAreaCard from './Moviescard';
import MovieDetails from './MovieDetails';
import './all.css';
import './App.css'; 
import Welcome from './Welcome';
import Player from './AudioPlayer';
import SearchLyrics from './searchLyrics';
import ChatApp from './ChatApp';
const App = () => {
  const ref = useRef(null);
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/spotify1" element={<Spotify1 />} />
        <Route path="/spotify" element={<Spotify />} />     
        <Route path="/Player" element={<Player />} />    
        <Route path="/Welcome" element={<Welcome/>} /> 
        <Route path="/searchLyrics" element={<SearchLyrics/>} /> 
        <Route path="/ChatApp" element={<ChatApp/>} /> 
        
        </Routes>
    </BrowserRouter>
  );
};

export default App;
