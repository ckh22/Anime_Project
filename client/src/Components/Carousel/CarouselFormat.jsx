import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import './CarouselFormat.css';

const CarouselFormat = () => {
    return (
        <Carousel showArrows={true} showStatus={false} infiniteLoop={true} dynamicHeight={true}>
            <div>
                <img src="https://wallpapercave.com/wp/wp8001408.jpg" alt='carousel'/>
            </div>
            <div>
                <img src="https://wallpapercave.com/wp/wp4832886.jpg" alt='carousel'/>
            </div>
            <div>
                <img src="https://wallpapercave.com/wp/wp7669286.jpg" alt='carousel'/>
            </div>
        </Carousel>
    )
}

export default CarouselFormat
