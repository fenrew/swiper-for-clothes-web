import './Reel.css'
import React, { useState, useEffect } from "react";
import { getApiUrl } from '../../helpers/fetching'
import SubHeader from './sub-header/SubHeader'
import ImageSlider from './image-slider/ImageSlider';

const Reel = (props) => {
    const [items, setItems] = useState(null)

    useEffect(() => {
       fetchItems(props.user).then(resItems => {
            setItems(resItems)
        }).catch(err => {
            console.error(err)
        })
    }, []);

    return (
        <div className='main-container'>
            <SubHeader />
            <ImageSlider className='reelImageSlider' items={items}></ImageSlider>
        </div>
    )
}

const fetchItems = (user) => {
    const apiUrl = getApiUrl('/api/data', user)
    const options = {}
    return fetch(apiUrl, options).then(res => res.json())
}

export default Reel