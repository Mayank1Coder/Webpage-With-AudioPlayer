// MovieDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import SpotifyPlayer from './AudioPlayer';
import Spotify1 from './Spotify1';
import { Button } from '@mui/material';
import './all.css';
import Welcome from './Welcome';
const MovieDetail = () => {
  const { id } = useParams();
  const details = [
    {
        Title:"Poop",
        Actor:"Shit (Poop)",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.K7jfl4CnLZ4JLuVUtbeDtQHaHa%26pid%3DApi&f=1&ipt=f2a32c143b40972d56ceb08082f25fe1974798e2119c2948ec7d5189841061a9&ipo=images",
      
      },
      {
        Title: "The Shawshank Redemption",
        Actor: "Morgan Freeman",
        image: "https://external-content.duckduckgo.com/iu/?u=https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg&f=1&h=500",
      },
  
      {
          Title:"3 Idiots",
          Actor:"Amir Khan",
          image:"https://duckduckgo.com/i/36963509869b0559.jpg",
  
      },
      {
          Title:"Stranger Things",
          Actor:"Millie Booby Brown",
          image:"https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
  
      },
      {
          Title:"Money Heist",
          Actor:"Alvaro Morte",
          image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IP0fCypZtfhZv3FYhJSbMgHaHa%26pid%3DApi&f=1&ipt=590456ef28b1ca97c0b3ad910b9608a851d34324ed317d79eaa594c68b0f271e&ipo=images",
  
      },
      {
          Title:"Panchyat",
          Actor:"Jitendr Kumar",
          image:"https://external-content.duckduckgo.com/iu/?u=https://m.media-amazon.com/images/M/MV5BOGRmMjc4MjEtM2E4YS00NjM5LWIwYzUtYTFlNTdhMTRhNmJjXkEyXkFqcGdeQXVyMTExMTIzMTA5._V1_.jpg&f=1&h=500",
  
      },
      {
          Title:"Kota Factory",
          Actor:"Mayur More",
          image:"https://i0.wp.com/popculturepartner.in/wp-content/uploads/2020/09/Kota-Factory-Is-The-Best-Indian-Series-In-2019.jpg?fit=750%2C450&ssl=1"
      },
      {
          Title:"Inception",
          Actor:"Cillian Murphy",
          image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JsYPBTLAel-gKfhICwrKsgHaK-%26pid%3DApi&f=1&ipt=20a31bb0c1011520ade1546252a5f2f1871051a6e535cf8d4fa27ab1962bcce3&ipo=images"
      },
      {
          Title:"Oopenhiemer",
          Actor:"Cillian Murphy",
          image:"https://external-content.duckduckgo.com/iu/?u=https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg&f=1&h=500"
      },
      {
          Title:"Squid Game",
          Actor:"Jung Ho-yeon",
          image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AN1hHvK3LroP-Sg3zLLJ4gAAAA%26pid%3DApi&f=1&ipt=30da5863a1b8a08e35cb0d4e9e8689855adb2438e76ad02d36518dbd61eed8bf&ipo=images"
      },
      {
          Title:"Breaking Bad",
          Actor:"Bryan Cranston",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/640px-Breaking_Bad_logo.svg.png"
      },
      {
          Title:"Naruto",
          Actor:"Yuri Lowenthal",
          image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Mm0sYfCEJ0k_AMWxd0ZtrwHaKS%26pid%3DApi&f=1&ipt=7a4a2f26e0efa91bdbf8a3804a65922b961e6f97e16f3c1b44abfd52989b6998&ipo=images"
      },
      {
          Title:"The Witcher",
          Actor:"	Lauren Schmidt Hissrich",
          image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2JsGojL-WhI9UibER1isFAHaKX%26pid%3DApi&f=1&ipt=fca0fbfa4c8a7054f1369f0323e9d87ca28e1fcb80c763e99a8d8423d6a5721a&ipo=images"
      },
  
  ];

  const movie = details[id];

  return (
    <div>
      <h1><b><i>{movie.Title} By {movie.Actor}</i></b></h1>
      <img src={movie.image} alt={movie.Title}/>
      <p>Actor: {movie.Actor}</p>
      <p>Registered Trademark of {movie.Actor}</p>
      <SpotifyPlayer/>
      <button onClick={() => window.location.href = './Spotify1'}>Go Back</button>
    </div>
  );
};

export default MovieDetail;
