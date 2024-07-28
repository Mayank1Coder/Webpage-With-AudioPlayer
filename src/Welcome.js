import React from 'react';
import Spotify1 from './Spotify1';
import Spotify from './Spotify';
import AudioPlayer from './AudioPlayer';
import SearchLyrics from './searchLyrics';

const Welcome = () => {
  return (
    <div>
      <div className="background-image">
        <img src="https://picsum.photos/2000/1000" alt="Background Image" />
      </div>
      <h1>Welcome to Mayank's Website!</h1>
      <button onClick={() => window.location.href = './Spotify1'}>Go to Spotify1</button>
      <button onClick={() => window.location.href = './Spotify'}>Go to Spotify</button>
      <button onClick={() => window.location.href = './Player'}>Go to Audio Player</button>
      <button onClick={() => window.location.href = './SearchLyrics'}>Go to Lyrics Finder</button>
      <button onClick={() => window.location.href = './ChatApp'}>Go to Chatbot</button>
    </div>
  );
}

export default Welcome;
