import * as React from 'react'
import { Fade, Reveal, Slide, Bounce } from "react-awesome-reveal";

import './population.css'
const image = './population.jpg'
export default function Population(){
    return(
        <div className="containerPopulation">
            <div className="population__text"> 
                <h1>Население страны</h1>
                    <Fade direction="up" > 
                        <p className="population__text__paragraph">
                            9 349,6 тыс. человек составило население Республики Беларусь на 1 января 2021 года - 
                            0,12% общей численности населения планеты.
                        </p>
                    </Fade> 
            </div>
            
            <img 
                className="image__population"
                src={"../../../population.png"}
                 />
        </div>
    )
}