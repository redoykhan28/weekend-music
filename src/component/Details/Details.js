import React from 'react';
import './Details.css'

const Details = (props) => {
    console.log(props.details)
    let { details } = props

    let img = '';
    let album = '';
    let arist = '';
    let desc = '';
    let published = '';
    for (const detail of details) {

        album = detail.strAlbum;
        img = detail.strAlbumThumb
        arist = detail.strArtist
        desc = detail.strDescriptionEN
        published = detail.intYearReleased
    }

    return (

        <div className='details'>
            <h3 style={{ textAlign: 'center' }}>Details</h3>
            <img src={img} alt="thumb" />
            <h3>Album: {album}</h3>
            <h6>Arist: {arist}</h6>
            <p>Realising date: {published}</p>
            <small>{desc}</small>


        </div>
    );
};

export default Details;