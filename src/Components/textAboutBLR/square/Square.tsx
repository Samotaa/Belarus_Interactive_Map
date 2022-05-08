import * as React from 'react'
import { Fade, Reveal, Slide, Bounce } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

import './square.css'



export default function Square(){
    return(
        <div className="containerSquare">
                <img 
                    className="image__square"
                    src={"../../../square.png"}
                />
             <div className="square__text"> 
                <h1>Площадь</h1>
                <Fade direction="up" > 
                    <p className="square__text__paragraph">
                        207,6 тыс. кв.км - площадь территории Республики Беларусь 
                        (страна занимает по этому показателю 84 место в мире и 13 место среди европейских государств).
                    </p>
                </Fade> 
            </div>

        </div>
    )
}