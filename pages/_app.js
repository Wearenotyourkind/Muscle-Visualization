import './style.css';
import 'antd/dist/antd.css';
import React from "react";
const App=({Component})=>{
    return(
            <>
                <Component />
            </>
    );
};

export default App;