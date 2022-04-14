import * as React from 'react';
import { Fade, Reveal, Slide, Bounce } from "react-awesome-reveal";

import './textAboutPresident.css';

export default function TextAbout(){
    return(
        <>
            <div className="container__president">
                <Fade direction="up"cascade >
                    <h1>
                        ПРЕЗИДЕНТ - ГЛАВА ГОСУДАРСТВА 
                    </h1>
                <h2 className="textAboutPresident">
                   <a className="link__president" href="https://president.gov.by/ru/president" target="_blank">Александр Григорьевич Лукашенко </a> 
                    - первый Президент Республики Беларусь. Его называют "политиком от народа", "самым народным Президентом", 
                    "Батькой". Биография белорусского лидера с самых ранних лет была непроста и насыщенна. Но именно трудности, которые приходилось постоянно преодолевать, 
                    закалили стальной характер, научили по-настоящему трудиться, воспитали яркие лидерские качества.
                </h2>
            </Fade>
            </div>
        </>
    )
}