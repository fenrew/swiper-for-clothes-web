import Reel from '../reel/Reel'
import Header from '../header/Header'
import React, { useState, useEffect } from "react";

const Main = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        fetchUsers().then(resUser => {
            setUser(resUser)
        })
    }, [])

    console.log("USER", user)

    return (
        <div>
            <Header />
            {
                user &&
                <Reel user={user} />
            }
        </div>
    )
}

const fetchUsers = () => {
    // TODO: Fetch user from Local storage
    const tempToken = localStorage.getItem('tempToken')
    let apiUrl = process.env.REACT_APP_API_URL + '/api/user'
    const options = {}
    if(tempToken && tempToken !== 'null'){
        apiUrl += '?token=' + tempToken
    }

    return fetch(apiUrl, options).then(res => res.json()).then(res => {
        if(res.tempToken !== tempToken){
            localStorage.setItem('tempToken', res.tempToken)
        }
        return res
    }).catch(error => {
        // Handle any errors
        console.error(error);
    });
}

export default Main