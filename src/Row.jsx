import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import instance from './axios';
import "./Row.css";
import axios from 'axios';



function Row({title,fetchUrl,verticle}) {
  const [trailerId,setTrailerId] =useState("");
  const [movies,setMovies]=useState([]);

  const base_img="https://image.tmdb.org/t/p/w500";

  useEffect(()=>{
   async function fetchData(){
  const request= await instance.get(fetchUrl)
  setMovies(request.data.results)
   }
   fetchData();
  },[])

 
  const handleClick=(id)=>{
    if(trailerId){
      setTrailerId("")
    }else{
      async function getData(id){
        let res =await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1893904dce9ca0b73aaa7d3cc950b88c&language=en-US`)
        setTrailerId(res.data.results[0].key)
      }
      getData(id);
    }
     
   }

  return (
    <div className='row'>
       
        <h1 className='title'>{title}</h1>
        <div className="row_container"  >
           {
          movies.map((item)=>{
            return <img
            onClick={()=>handleClick(item.id)}
            className={verticle ? "large_poster":"poster_img"}
            key={item.id} src={`${base_img}${verticle?item.poster_path:item.backdrop_path}    `} alt={item.title} />
          })
        } 
        </div>
        {
          trailerId && <div>
          <iframe
          width="100%"
          height="390"
          className='video'
        
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
            >
          
            </iframe>
            <div className='close_container'>
            <button
             onClick={()=>setTrailerId("")}
            className='pop_close'>Close</button>
            </div>
           
        </div>

        }
        
      
    </div>

    

  )
}

export default Row