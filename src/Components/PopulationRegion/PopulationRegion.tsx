import * as React from 'react';
import './population.css'
import { Fade, Reveal, Slide, Bounce } from "react-awesome-reveal";

export default function PopulationOblast(){
    return(
        <div className="PopulationGrid">
                    {/* main */}
                    {/* triggerOnce */}
                    <Slide direction="up"  >
            <div className="wrapper__population">
                <div>
                    <p className="population__region__paragraph">
                        <strong> 
                            Название
                        </strong>
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph"> 
                        <strong>
                            Количество районов
                        </strong>
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph"> 
                        <strong>
                            Количество городов
                        </strong>
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph"> 
                        <strong>
                            Население области
                        </strong>
                    </p>
                </div>
            </div>

            {/* Брестская */}

            <div className="wrapper__population_Brest">
                <div>
                    <p className="population__region__paragraph">
                    <strong> <a
                    className="population_link" 
                    href="https://president.gov.by/ru/belarus/regions/brestskaya"
                    target="_blank">
                        Брестская область
                        </a></strong>
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a  
                            className="population_link" 
                            href="https://president.gov.by/ru/belarus/regions/brestskaya#:~:text=%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D1%83%D1%8E%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B2%D1%85%D0%BE%D0%B4%D1%8F%D1%82%3A-,16%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%BE%D0%B2,-(%D0%91%D0%B0%D1%80%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%91%D0%B5%D1%80%D0%B5%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%B8%D0%B9"
                            target="_blank">
                            16 районов
                        </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a  
                            className="population_link" 
                            href="https://president.gov.by/ru/belarus/regions/brestskaya#:~:text=18%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%3B"
                            target="_blank">
                            18 городов районного значения
                        </a>
                        
                    </p >
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                        className="population_link"
                        href="https://president.gov.by/ru/belarus/regions/brestskaya#:~:text=%D0%92%20%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D1%8E%D1%82%201%20338%20044%C2%A0%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0"
                        target="_blank">
                        1 338 044 человека 
                        </a>
                        
                    </p>
                </div>
            </div>
            {/* Витебская */}
            <div className="wrapper__population_Vitebsk">
                <div>
                    <p className="population__region__paragraph">
                       <strong>
                           <a   
                                className="population_link"
                                href="https://president.gov.by/ru/belarus/regions/vitebskaya"
                                target="_blank">
                                Витебская область
                            </a>
                        </strong> 
                    </p >
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/vitebskaya#:~:text=%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D1%83%D1%8E%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B2%D1%85%D0%BE%D0%B4%D1%8F%D1%82%3A-,21%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,-(%D0%91%D0%B5%D1%88%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%91%D1%80%D0%B0%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%92%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9"
                            target="_blank">
                                21 район    
                        </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/vitebskaya#:~:text=17%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D0%BE%D0%B4%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F"
                            target="_blank">
                                17 городов районного значения
                        </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/vitebskaya#:~:text=%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D0%BB%D0%BE%201%20120%20364%C2%A0%D1%82%D1%8B%D1%81.%20%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA"
                            target="_blank">
                                1 120 364 человека 
                        </a>
                        
                    </p>
                </div>
            </div>

                {/* Гомельская */}

            <div className="wrapper__population_Gomel">
                <div>
                    <p className="population__region__paragraph">
                    <strong> 
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/gomelskaya"
                            target="_blank">
                            Гомельская область
                        </a>
                    </strong>
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/gomelskaya#:~:text=%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D1%83%D1%8E%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B2%D1%85%D0%BE%D0%B4%D1%8F%D1%82%3A-,21%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,-(%D0%91%D1%80%D0%B0%D0%B3%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%91%D1%83%D0%B4%D0%B0%2D%D0%9A%D0%BE%D1%88%D0%B5%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9"
                            target="_blank">
                            21 районов
                        </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                            <a 
                                className="population_link"
                                href="https://president.gov.by/ru/belarus/regions/gomelskaya#:~:text=17%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F"
                                target="_blank">
                                17 городов районного значения
                            </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a  
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/gomelskaya#:~:text=%D0%9D%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%2D%201%20375%20286%20%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA"
                            target="_blank"
                            >
                                1 375 276 человека
                        </a>
                         
                    </p>
                </div>
            </div>

                {/* Гродненская */}

            <div className="wrapper__population_Grodno">
                <div>
                    <p className="population__region__paragraph">
                    <strong> 
                        <a  
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/grodnenskaya"
                            target="_blank">
                            Гродненская область
                        </a>
                    </strong>
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a  
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/grodnenskaya#:~:text=%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%B5%D0%BD%D1%81%D0%BA%D1%83%D1%8E%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B2%D1%85%D0%BE%D0%B4%D1%8F%D1%82%3A-,17%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%BE%D0%B2,-(%D0%91%D0%B5%D1%80%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B8%D1%86%D0%BA%D0%B8%D0%B9%2C%20%D0%92%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%8B%D1%81%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9"
                            target="_blank">
                                17 районов
                        </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/grodnenskaya#:~:text=14%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F"
                            target="_blank">
                                14 городов районного значения
                        </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a  
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/grodnenskaya#:~:text=%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D0%BB%D0%B0%201%20017%20976%20%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA"
                            target="_blank"
                            >
                                1 017 976 человека 
                        </a>
                        
                    </p>
                </div>
            </div>


             {/* Минская */}

             <div className="wrapper__population_Minsk">
                <div>
                    <p className="population__region__paragraph">
                    <strong> 
                        <a  
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/minskaya"
                            target="_blank">
                            Минская область
                        </a>
                    </strong>
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/minskaya#:~:text=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D1%83%D1%8E%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B2%D1%85%D0%BE%D0%B4%D1%8F%D1%82%3A-,22%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0,-(%D0%91%D0%B5%D1%80%D0%B5%D0%B7%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%92%D0%B8%D0%BB%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B9"
                            target="_blank">
                                22 района
                        </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/minskaya#:~:text=%D0%A1%D1%82%D0%BE%D0%BB%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%A3%D0%B7%D0%B4%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%A7%D0%B5%D1%80%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9)%3B-,24%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0,-%2C%20%D0%B2%20%D1%82%D0%BE%D0%BC%20%D1%87%D0%B8%D1%81%D0%BB%D0%B5"
                            target="_blank">
                                24 города
                        </a>
                        
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/minskaya#:~:text=%D1%8F%D0%BD%D0%B2%D0%B0%D1%80%D1%8F%202021%C2%A0%D0%B3%D0%BE%D0%B4%D0%B0%20%2D-,1%20473%20346%C2%A0%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA,-%2C%20%D0%B2%20%D1%82%D0%BE%D0%BC%20%D1%87%D0%B8%D1%81%D0%BB%D0%B5"
                            target="_blank">
                                3 483 132  человека 
                        </a>
                        
                    </p>
                </div>
            </div>


            {/* Могилёвская */}

            <div className="wrapper__population_Mogilev">
                <div>
                    <p className="population__region__paragraph">
                    <strong> <a 
                                className="population_link"
                                href="https://president.gov.by/ru/belarus/regions/mogilyovskaya"
                                target="_blank">
                                Могилёвская область
                        </a>
                    </strong>
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/mogilyovskaya#:~:text=%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D1%83%D1%8E%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%20%D0%B2%D1%85%D0%BE%D0%B4%D1%8F%D1%82%3A-,21%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,-(%D0%91%D0%B5%D0%BB%D1%8B%D0%BD%D0%B8%D1%87%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%91%D0%BE%D0%B1%D1%80%D1%83%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%91%D1%8B%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9"
                            target="_blank">
                                21 район   
                        </a>
                       
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/mogilyovskaya#:~:text=%D0%B2%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B5%20%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2%D0%B5%3B-,17%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2,-%2C%20%D0%B2%20%D1%82%D0%BE%D0%BC%20%D1%87%D0%B8%D1%81%D0%BB%D0%B5"
                            target="_blank">
                                17 городов
                        </a>
                      
                    </p>
                </div>
                <div>
                    <p className="population__region__paragraph">
                        <a 
                            className="population_link"
                            href="https://president.gov.by/ru/belarus/regions/mogilyovskaya#:~:text=%D0%B2%20%D1%80%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D0%BB%D0%BE-,1%20014%20843%20%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0%2C,-%D0%B2%20%D1%82%D0%BE%D0%BC%20%D1%87%D0%B8%D1%81%D0%BB%D0%B5"
                            target="_blank">
                                1 014 843 человека
                        </a>
                         
                    </p>
                </div>
            </div>
            </Slide>
        </div>
    )
}