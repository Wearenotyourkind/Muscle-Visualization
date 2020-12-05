import React from 'react';
import Navigation from "../components/Navigation";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import { Howl, Howler } from 'howler';
import useSound from '../hooks/useSound';



const index=()=>{
    const BGM ='../audio/bgm.mp3';
    useSound(BGM, 1, 2000);
    return(
            <>

                <Navigation/>
                <Contents/>
                <Footer/>
            </>
    );
};


export default index;