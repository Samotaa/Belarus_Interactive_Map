import React, {useState} from 'react';
import Universities from '../maps/Universities/Universities'
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
       
            <div className="navbar">
                <div className="sticky">
                    <Link className="link__button"  data-back="Back" data-front="Front" to="/">На главную</Link> 
                    <Link className="link__button"  data-back="Back" data-front="Front" to="/universities">Университеты</Link>  
                    <Link className="link__button"  data-back="Back" data-front="Front" to="/lakes">Озёра</Link>  
                </div>
            </div>
            
    
    );
}

 /* {isUn &&  <Universities />} */