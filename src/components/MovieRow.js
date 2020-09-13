import React,{useState, useEffect} from 'react'
import axios from '../axios';
import './MovieRow.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const base_url="https://image.tmdb.org/t/p/original/";
export const MovieRow = ({title,fetchUrl,isLarge}) => {
    const [movies,setMovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState('')
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            //console.log(request)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    },[fetchUrl])

    const options={
        height: "390",
        widht: "100%",
        playerVars:{
            autoplay: 1,
        }
    }

    const handleClick=(movie)=>{
        console.log('inside handle click: ',movie)
        if(trailerUrl)
        setTrailerUrl('');
        else{
            const movieName=movie.name ? movie.name: movie.original_title ? movie.original_title : ""
            if(!movieName) return;
            movieTrailer(movieName)
                .then(url=>{
                    const urlParams=new URLSearchParams(new URL(url).search)
                    console.log(urlParams)
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }

    if(movies.length>0) console.log(movies);
    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie=>{
                        return(
                            <img onClick={()=>{handleClick(movie)}} key={movie.id} className={`row__poster ${isLarge && "row__posterLarge"}`} src={`${base_url}${isLarge?movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
                        )
                    })
                }
            </div>
            {/* container with posters */}
            { trailerUrl && <YouTube videoId={trailerUrl} opts={options} /> }
        </div>
    )
}
