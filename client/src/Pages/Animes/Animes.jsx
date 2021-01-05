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
            <ul className='sub-nav'>
                <li>Winter 2021 Anime</li>
                <li>By Decade</li>
                <li>Nav</li>
                <li>Nav</li>
                <li>Nav</li>
                <li>Nav</li>
            </ul>
            {
            loading ? (
                <Loader/>) : error ? (
                <Message variant="error">
                    {error}</Message>
            ) : (
                <div className='container'>
                    <div className="item-a">Featured Anime</div>
                    {
                    animes.map((anime) => (


                        <Anime anime={anime}
                            className='item-b'
                            key={
                                anime._id
                            }/>
                    ))
                } </div>
            )
        } </div>
    );
};
export default Animes;
