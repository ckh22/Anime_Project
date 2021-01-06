import React from 'react'
import {useSelector} from 'react-redux'
import './AnimeDetails.css'

const AnimeDetails = ({match}) => {
    const data = useSelector((state) => state.animeList.animes)
    const found = data.find(anime => anime._id === match.params.id)
    const [anime, setstate] = React.useState(found);
    return (
        <div className='main'>
            <ul className='sub-nav'>
                <li>Winter 2021 Anime</li>
                <li>By Decade</li>
                <li>Nav</li>
                <li>Nav</li>
                <li>Nav</li>
                <li>Nav</li>
            </ul>
            <div className="content">
                <div className="jumbo-container">
                    <img src="https://www.denofgeek.com/wp-content/uploads/2020/02/my-hero-academia-heroes-rising.png?fit=2092%2C1048" alt="" className='jumbo-img'/>
                </div>
                <h1>{
                    anime.title
                }</h1>
                <div className='grid'>
                    <div className='summary'>Summary</div>
                    <p className="description">
                        {
                        anime.description
                    } </p>
                </div>

            </div>
        </div>
    )
}

export default AnimeDetails
