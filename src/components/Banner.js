import React,{useState,useEffect} from 'react'
import axios from './../axios';
import requests from './../requests';
import './Banner.css';

const base_url="https://image.tmdb.org/t/p/original/";
export const Banner = () => {
    const [movie,setMovie]=useState()
    
    useEffect(()=>{
        async function fetchMovie(){
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*(request.data.results.length-1))])
        }
        fetchMovie();
    },[])
    console.log('Movie: ',movie)
    return (
        <header className="banner"
        style={{
            backgroundSize:'cover',
            backgroundImage: `url(${base_url}${movie && movie.backdrop_path})`,
            backgroundPosition: 'center center'  
            
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{(movie && movie.title) || (movie && movie.original_name) || (movie && movie.name)}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie && movie.overview}
                </h1>
            </div>
            <div className="banner--fadeBottom">

            </div>
        </header>
    )
}
