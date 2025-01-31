import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieRow } from './components/MovieRow';
import requests from './requests';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="app">
        <Navbar/>
        <Banner/>
        <MovieRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge/>
        <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
