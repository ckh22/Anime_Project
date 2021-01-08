import React, {useEffect} from 'react';

// Components
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';
import Anime from './VoiceActor/VoiceActor';

// Redux
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {listVoiceActors} from '../../redux/actions/vaActions';
import CarouselFormat from '../../Components/Carousel/CarouselFormat'

const VoiceActors = () => {
    const dispatch = useDispatch();
    const VA_LIST = useSelector((state) => state.voiceActorList);
    const {loading, error, voiceActors} = VA_LIST;

    useEffect(() => {
        dispatch(listVoiceActors());
    }, [dispatch]);
    return (<div className='main'>
        <ul className='sub-nav'>
            <li>Popular</li>
            <li>Upcoming</li>
            <li>Community</li>

        </ul>
        {
        loading ? (<Loader/>) : error ? (<Message variant="error"> {error}</Message>) : (<div className='container'>
            <CarouselFormat/>
            <div className="popular">
                Hot 🔥
            </div>
            <div className="animes-flex"> {
                voiceActors.map((voiceActor) => (<div>
                    <div> {
                        voiceActor.title
                    }</div>
                </div>))
            } </div>
        </div>)
    } </div>)
}

export default VoiceActors
