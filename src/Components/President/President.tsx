import * as React from 'react';
import { Fade, Reveal, Slide, Bounce } from "react-awesome-reveal";

import './president.css'



export default function President(){
    return(
        <>
                <div className="president">
                    <img 
                    className="img__president"
                    src={"https://upload.wikimedia.org/wikipedia/commons/8/88/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9B%D1%83%D0%BA%D0%B0%D1%88%D0%B5%D0%BD%D0%BA%D0%BE_%2828-12-2021%29_%28cropped%29.jpg"} 
                    alt="Lukashenko A.G."/>
                </div>
        </>
    )
}