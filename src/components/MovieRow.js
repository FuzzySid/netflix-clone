import React,{useState, useEffect} from 'react'
import axios from '../axios';
import './MovieRow.css';

const base_url="https://image.tmdb.org/t/p/original/";
export const MovieRow = ({title,fetchUrl}) => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            //console.log(request)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    },[fetchUrl])
    if(movies.length>0) console.log(movies);
    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie=>{
                        return(
                            <img key={movie.id} className="row__poster" src={base_url+movie.poster_path} alt={movie.name}/>
                        )
                    })
                }
            </div>
            {/* container with posters */}

        </div>
    )
}
