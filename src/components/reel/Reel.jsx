import './Reel.css'
import SubHeader from './sub-header/SubHeader'
import React, { useState, useEffect } from "react";
import { getApiUrl, getImageUrl } from '../../helpers/fetching'

const Reel = (props) => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetchItems(props.user).then(resItems => {
            console.log(resItems)
            setItems(setItems)
        })
    }, []);

    return (
        <div className='main-container'>
            <SubHeader />
            <div>
                <img src={getImageUrl('0c8737aab3b04b1ebe7df66bee0dbed6.webp')} style={{width: '100%'}}></img>
            </div>
        </div>
    )
}

const fetchItems = (user) => {
    const apiUrl = getApiUrl('/api/data', user)
    const options = {}
    return fetch(apiUrl, options).then(res => res.json())
}

export default Reel