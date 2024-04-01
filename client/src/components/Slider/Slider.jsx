import { WestOutlined} from '@mui/icons-material';
import { EastOutlined } from '@mui/icons-material';
import { useState } from 'react';
import React from 'react';
import './Slider.scss'

const Slider = () => {
  
    const [currentSlide, setCurrentSlide] = useState(0);

    //images to be displayed in the slideshow
    const data = [
        'https://images.pexels.com/photos/16233364/pexels-photo-16233364/free-photo-of-decorated-easter-cake-and-candle-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/17125135/pexels-photo-17125135/free-photo-of-a-cup-of-tea-and-a-bunch-of-chamomile-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5782535/pexels-photo-5782535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]

        //decrements current slide, if current slide is already 0, sets it to 2 to loop back to the last slide
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1 );
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }
    
    return (
        <div className='slider'>
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt=''/>
                <img src={data[1]} alt=''/>
                <img src={data[2]} alt=''/>
            </div>

            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlined />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Slider;
