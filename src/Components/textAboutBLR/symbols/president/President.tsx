import * as React from 'react'
import { Fade, Reveal, Slide, Bounce } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

import './president.css'




export default function Emblem(){
    return(
        <div className="containerPresident">
            <div className="text__section">

                <h1>
                    ПРЕЗИДЕНТ - ГЛАВА ГОСУДАРСТВА 
                </h1>

                <Slide >
                    <h2 className="text__about__president">
                        <a className="link__president" href="https://president.gov.by/ru/president" target="_blank">Александр Григорьевич Лукашенко </a> 
                        - первый Президент Республики Беларусь. Его называют "политиком от народа", "самым народным Президентом", 
                        "Батькой". Биография белорусского лидера с самых ранних лет была непроста и насыщенна. Но именно трудности, которые приходилось постоянно преодолевать, 
                        закалили стальной характер, научили по-настоящему трудиться, воспитали яркие лидерские качества.
                    </h2>
                </Slide>
            </div>
            <div className="img__and__text__president">
                <img 
                    className="img__president"
                    src={"../../../../president.jpg"} 
                    alt="Lukashenko A.G."
                />

       
            </div>      
        </div>

    )
}