import React, { useEffect, useState } from 'react'
import instance from '../axios';
import requests from '../Requests';
import "./Banner.css"
import Nav from './Nav';

function Banner() {
    const [movie,setMovie] =useState({})

    useEffect(()=>{
        async function fetchData(){
          const req= await instance.get(requests.fetchNetflixOrignal)
          setMovie(req.data.results[Math.floor(Math.random()*req.data.results.length -1)])
        }
        fetchData();
    },[])

    function cutter(str,n){
      return str?.length>n ?str.substring(0,n)+"...":str
    }
    
  return (

   <header className='banner'
   style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}

   >
    <Nav/>
  <div className="banner_content">
  <h1>
    {movie?.title || movie?.name || movie?.original_name}

  </h1>
  <div >
            <button className="banner_button">
                play
              </button>
             <button className="banner_button">
               My List
             </button>
  </div>
  <div className="description">
    {
      cutter(movie?.overview,150)
      
    }
  </div>
  </div>

<div className='blur'>

</div>
   </header>
  )
}

export default Banner