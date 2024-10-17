import React, { useEffect, useState } from 'react';
import "./styles.css";
import { Loading } from './Loading';
import axios from 'axios';

export const AppSearcher = () => {

    const [videoLink,setVideoLink] = useState("");
    const [error,setError] = useState("");
    const [videoId,setVideoId] = useState("");
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);

    let api_key = 'AIzaSyAgCBB2m41mKNUwkIjX7Hbw2OyKlRBI674';

    const fetchData = () =>{
        setLoading(true);
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${api_key}`)
        .then((response) =>{
            setData(response.data.items);
            console.log(response.data.items);
            
            setLoading(false);
        })
        .catch((error) =>{
            setError(error)
        })
    }

    const extractVideoId = (link) =>{
        let parts = link.split("/");

        if(parts[2] === 'youtu.be'){
            let video_id = parts[3].split('?')[0];
            return video_id;            
        }
        return null;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(videoLink === ''){
            setError("Please type the link")
        }
        else if(extractVideoId(videoLink) === null){
            setError("Link provided is wrong");
        }
        else if(extractVideoId(videoLink) !== null){
            setError("");
            setVideoId(extractVideoId(videoLink));
            console.log("dazt");
        }
    }

    useEffect(() =>{
        if(videoId !== ''){
            fetchData();
        }
    },[videoId])  

  return (
    <div className='app-searcher'>
        <h2>Youtube app searcher</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
            <input type='text' 
            placeholder='Enter the video link here' 
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            />
            <input type='submit' value="Search" />
            <br></br>
            {
                error && <span style={{color:"red"}}>{error}</span>
            }
        </form>
        {
            videoId && <p style={{color:'green'}}>Video id: <strong>{videoId}</strong></p>
        }
        {
            loading && <Loading />
        }

        {
            videoId && <div className='video-container'>
                <h4>Is that the video you are looking for?</h4>
                <iframe width="853" 
                height="480" 
                src={`https://www.youtube.com/embed/${videoId}`}
                frameborder="0" 
                allowfullscreen></iframe>
            </div>
        }
    </div>
  )

}
