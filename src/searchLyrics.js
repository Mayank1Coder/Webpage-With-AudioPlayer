import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchLyrics = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [lyrics, setLyrics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLyrics = async () => {
      if (searchQuery) {
        try {
          const response = await axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get`, {
            params: {
              q: searchQuery,
              apikey: 'YOUR_MUSIXMATCH_API_KEY'
            }
          });
          const lyrics = response.data.message.body.lyrics;
          setLyrics(lyrics);
        } catch (error) {
          setError(error.message);
        }
      }
    };
    fetchLyrics();
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for song lyrics" />
      {lyrics && (
        <div>
          <h2>{lyrics.song}</h2>
          <p>{lyrics.lyrics}</p>
        </div>
      )}
      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
};

export default SearchLyrics;