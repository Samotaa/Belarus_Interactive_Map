import React, {useState} from 'react';
import Universities from '../maps/Universities/Universities'
import { Link } from "react-router-dom";

import './navbar.css'

export default function Nav(){

    return(
       
            <div className="navbar">
                <div className="sticky">
                    <Link className="link__button"  data-back="Back" data-front="Front" to="/">На главную</Link> 
                    <Link className="link__button"  data-back="Back" data-front="Front" to="/sputnik">Спутник</Link> 
                    <Link className="link__button"  data-back="Back" data-front="Front" to="/universities">Университеты</Link>  
                    <Link className="link__button"  data-back="Back" data-front="Front" to="/lakes">Озёра</Link>  
                    <Link className="link__button"  data-back="Back" data-front="Front" to="/regions">Население областей</Link>  
                </div>
            </div>
        
    );
}
