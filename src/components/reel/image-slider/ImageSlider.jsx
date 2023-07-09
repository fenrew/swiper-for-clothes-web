import './imageSlider.css'
import React, { useState, useEffect, useRef } from "react";
import { getImageUrl } from '../../../helpers/fetching'

const ImageSlider = (props) => {
    const [isPaused, setIsPaused] = useState(false)
    // Iterate over the props and each item from 

    const imageRefs = useRef([]);

    useEffect(() => {
        const interval = startReel(imageRefs, isPaused)

        return () => {
            clearInterval(interval); // Cleanup the interval on component unmount
        };
    }, []);

    const assignRef = (index) => (ref) => {
        imageRefs.current[index] = ref;
    };

    const ImageArray = props.items?.map((item, index) => {
        const imageUrl = item.primaryImage.split('/')[2] + '.webp';

        return (
            <div
                key={item._id}
                ref={assignRef(index)}
                className='imageSliderAnimation imageSliderImageContainer'
            >   <div>
            </div>
                {/* <div className='imageSliderTagContainer'>
                    <div>
                        {item.priceDisplay.priceSplash && <div className='imageSliderSalesTag'>{item.priceDisplay.priceSplash}</div>}
                    </div>
                    <div className='imageSliderPriceTag'>{item.priceDisplay.salesPrice},-</div>
                </div> */}
                <img
                    src={getImageUrl(imageUrl)}
                    alt={item._id}
                    className='imageSliderImage'
                />
            </div>
        );
    });

    return (
        <div className='imageSliderMainContainer'>
            {ImageArray}
        </div>
    )
}

const startReel = (imageRefs, isPaused) => {
    let iteration = 0

    const interval = setInterval(() => {
        if(isPaused){
            return
        }
        imageRefs.current[iteration].style.animationPlayState = 'running';
        iteration += 1
        if(iteration === imageRefs.current.length){
            return clearInterval(interval)
        }
    }, 2000);

    return interval
}

export default ImageSlider