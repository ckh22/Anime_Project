import {Button} from '@material-ui/core'
import React from 'react'
import {useSelector} from 'react-redux'
import './AnimeDetails.css'

const AnimeDetails = ({match}) => {
    const data = useSelector((state) => state.animeList.animes)
    const found = data.find(anime => anime._id === match.params.id)
    const [anime] = React.useState(found);
    return (
        <div className='main'>
            <ul className='sub-nav'>
                <li>Episodes</li>
                <li>Manga</li>
                <li>Community</li>
                <li>Characters</li>
                <li>Voice Actors</li>
                
            </ul>
            <div className="content">
                <div className="jumbo-container">
                    <div class="button-container">
                        <a href="https://google.com" class="button">
                            Join The Community
                        </a>
                    </div>
                    <img src="https://www.denofgeek.com/wp-content/uploads/2020/02/my-hero-academia-heroes-rising.png?fit=2092%2C1048" alt="" className='jumbo-img'/>
                </div>
                <div className="top-container">
                    <h1>{
                        anime.title
                    }</h1>
                    <div id="form-btn">
                        <Button color='primary' variant='outlined'>
                            Edit the form
                        </Button>
                    </div>

                </div>

                <div className="grid-form">
                    <div className='form-area'>
                        <div className="summary-area">
                            <div className='summary'>Summary</div>
                            <hr/>
                            <p className="description">
                                {
                                anime.description
                            } </p>
                        </div>
                    </div>
                    <div className="community-area"></div>
                </div>

            </div>
        </div>
    )
}

export default AnimeDetails
