import * as React from 'react'
import { Fade, Reveal, Slide, Bounce } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

import './flag.css'



export default function Flag(){
    return(
        <div className="containerFlag">
            <Reveal >
                <h6 
                    className="text__about__flag">
                        Государственный флаг Республики Беларусь является символом государственного суверенитета Республики Беларусь, представляет собой прямоугольное полотнище, 
                        состоящее из двух горизонтально расположенных цветных полос: верхней - красного цвета в 2/3 ширины флага и нижней - зеленого цвета в 1/3.
                        Около древка вертикально расположен белорусский национальный орнамент красного цвета на белом поле, составляющий 1/9 длины флага. 
                        Отношение ширины флага к его длине - 1:2. Флаг крепится на древке (флагштоке), которое окрашивается в золотистый (охра) цвет. 
                </h6>
            </Reveal>
            <img 
                className="image__flag"
                src={'../../../../flag.jpg'} 
            />
        </div>
    
    )
}