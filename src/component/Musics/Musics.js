import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Music from '../Music/Music';
import './Musics.css'

const Musics = () => {

    const [musics, setMusic] = useState([])
    useEffect(() => {
        fetch('https://theaudiodb.com/api/v1/json/2/album.php?i=112024')
            .then(res => res.json())
            .then(data => setMusic(data.album))
    }, [])

    const [details, setDetails] = useState([])
    const btnHandler = (detail) => {

        // console.log(detail)
        let newDetail = [...details, detail];
        setDetails(newDetail)
        // console.log(newDetail)
    }

    return (

        <div className='main-container'>

            <div >
                <h3 style={{ marginLeft: '30px' }}>Top Trendy song</h3>

                <div className='music-card'>
                    {
                        musics.map(music => <Music key={music.idAlbum} music={music} song={btnHandler}></Music>)
                    }
                </div>

            </div>

            <div className='details'>
                <Details details={details}></Details>
            </div>

        </div>
    );
};

export default Musics;