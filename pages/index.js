import React from 'react';
import Navigation from "../components/Navigation";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import {useSelector} from "react-redux";

const index=()=>{
    return(
            <>
                <Navigation/>
                <Contents/>
                <Footer/>
            </>
    );
};


export default index;