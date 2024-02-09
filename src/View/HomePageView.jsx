import React, { useState, useEffect } from 'react';

import HomePageBtn from '../components/ButtonForList/HomePageBtn';
import NavBar from '../components/NavBar/NavBar';
import Title from '../components/Title/Title'

import './HomePageView.css';


function HomePageView(){

    const [visible, setVisible] = useState(false);

    const changeOpacity = () => {
        setVisible((prevVisible) => !prevVisible);
    };

    useEffect(() => {
        changeOpacity();
      }, []);

    return (
        <>
            <div className={`homePageHolder ${visible ? 'visible' : ''}`}>
                <NavBar />
                <Title />
                <HomePageBtn />
            </div>
        </>
    )
}

export default HomePageView;