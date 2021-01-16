import React, {useEffect} from 'react'
import './Homepage.css'
import {Button, Card} from '@material-ui/core'

import Leaderboard from '../../Components/Statistics/Leaderboard'
import {listTopAnimes} from '../../redux/actions/topAnimesActions'
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../Components/Loader/Loader'
import Message from '../../Components/Message/Message'

export default function Homepage() {
    const dispatch = useDispatch();
    const topAnimeList = useSelector(state => state.topAnimeList)
    const {loading, error, topAnimes} = topAnimeList;
    useEffect(() => {
        dispatch(listTopAnimes())
    }, [dispatch])
    return (
        <div className='main'>
            <div className="color">
            {
            loading ? (
                <Loader/>) : error ? (
                <Message variant='error'>
                    {error}</Message>
            ) : (
                <>
                    <section className="one">
                        <div className="flex-container">
                            <div className="leaderboard-container">
                                <div className="leaderboard">
                                    <Leaderboard/>
                                </div>
                            </div>

                            <div className="vote-area">
                                <div className="grid-area">
                                    <p>Lorem ipsum dolor sit amet, id sed assum maluisset. Ut ius omnesque electram. Natum quando et nam, moderatius vituperata mea ad, at sea labitur consequat.</p>
                                    <Button color='primary' size='large'>Vote Now!</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="two">
                        <div className="flex-two">
                            <p>Active Pages</p>
                            <div className="grid-two">
                                {
                                topAnimes.map((topAnime) => (
                                    <div className="text">
                                        <div> {
                                            topAnime.title
                                        } </div>
                                    <Card raised={true}
                                        className='cards'
                                        key={topAnime._id}
                                        style={{backgroundImage: `url(${topAnime.image_url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
                                        >
                                        
                                    </Card>
                                    
                                        
                                        
                                        <div> {
                                            topAnime.rank
                                        } </div>  
                                        <div> {
                                            topAnime.start_date
                                        } {
                                            topAnime.end_date
                                        }</div>
                                        
                                    </div>
                                ))
                            } </div>
                        </div>
                    </section>
                    <section className="three"></section>
                    <section className="four"></section>
                    <section className="five"></section>
                </>
            )
        }
            </div>
        </div>
    )
}
