import React, {useState} from 'react';
import Universities from '../maps/Universities'
import { Routes, Route, Link } from "react-router-dom";

import './navbar.css'

export default function Nav(){
    const [isUn, setUn] = useState(false)
    let content = null;
    const handClicker = () => {
        setUn(!isUn)
    }

    if(isUn) {
        content = <Universities />
    }

    return(
        <>  
            <div className="navbar">
                <Link  data-back="Back" data-front="Front" to="/universities">Перейти к карте</Link>  
            </div>
            
            {isUn &&  <Universities />}
        </>
    );
}

