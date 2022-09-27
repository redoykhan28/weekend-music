import React from 'react';
import './Music.css'

const Music = (props) => {

    const { strAlbumThumb, strAlbumStripped, strArtist } = props.music

    return (

        <div className='card'>
            <img src={strAlbumThumb} alt="Thumbnail" />
            <h4>Album: {strAlbumStripped}</h4>
            <p>{strArtist}</p>
            <button className='btn' onClick={() => props.song(props.music)}>Details</button>
        </div>
    );
};

export default Music;