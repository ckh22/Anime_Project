// Dependencies
import React, {useState, useEffect} from 'react';
import './Animes.css'

// Components
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';
import Anime from './Anime/Anime';

// Material UI Core
import {Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

// Redux
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {listAnimes} from '../../redux/actions/animeActions';
import CarouselFormat from '../../Components/Carousel/CarouselFormat'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100
    },
    control: {
        padding: theme.spacing(2)
    }
}));

const Animes = ({history, match}) => {
    // Page number for pagination later on
    // const pageNumber = match.params.pageNumber || 1;

    // Redux
    const dispatch = useDispatch();
    const animeList = useSelector((state) => state.animeList);

    // Decontructing animeDetails on Redux store
    const {loading, error, animes} = animeList;

    // Material UI Core
    const classes = useStyles();

    // Effect
    useEffect(() => {
        dispatch(listAnimes());
    }, [dispatch]);

    return (
        <div className='main'>
            <div className="anime-content">
                <ul className='sub-nav'>
                    <li>Winter 2021 Anime</li>
                    <li>Popular</li>
                    <li>By Decade</li>
                    <li>Community</li>
                </ul>
                {
                loading ? (
                    <Loader/>) : error ? (
                    <Message variant="error">
                        {error}</Message>
                ) : (
                    <div className='container'>
                        <CarouselFormat/>
                        <div className="popular">
                            Hot 🔥
                        </div>
                        <div className="animes-flex">
                            {
                            animes.map((anime) => (

                                <div><Anime anime={anime}
                                        className='item-b'
                                        key={
                                            anime._id
                                        }/><div>{
                                        anime.title
                                    }</div>
                                </div>

                            ))
                        } </div>
                    </div>
                )
            } </div>
        </div>

    );
};
export default Animes;
