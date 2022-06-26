import * as React from 'react';
import { render } from 'react-dom';



import Title from '../title/title';
import Nav from '../navbar/NavBar';
import Places from '../places/places';
import PopulationRegion from '../PopulationRegion/PopulationRegion';
import President from '../textAboutBLR/symbols/president/President'
import Population from '../textAboutBLR/population/Population'
import Square from '../textAboutBLR/square/Square'
import styles from './styles.module.css'
import Flag from '../textAboutBLR/symbols/flag/Flag'
import Emblem from '../textAboutBLR/symbols/emblem/Emblem'

import { Parallax } from "react-parallax";

import './someinfo.css'


const style = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const image1 = '../../main.jpg'
const image2 = '../../minks.jpg'

export default function Main() {
  return (
    < >
      <div className={styles.container}>
        <Nav />    
        <div className="mainBlock">
          <Title />
        </div>

        <div className="A" style={style}>
          <Parallax bgImage={image1} strength={600}>
            <div style={{ height: '100vh'}}>
            </div>
          </Parallax>
        </div>
        <div className="infoAbotRepublic">
          <div className="squareStage">
            <Square />
          </div>
          <div className="populationStage">
            <Population />
          </div>
        </div> 
        <div className="mainStage">
          <Places />
          <PopulationRegion />
        </div>
        <Parallax bgImage={image2} strength={800}>
          <div style={{ height: 400 }}>
          </div>
        </Parallax>
        <Flag />
        <Emblem />
        <div className="PresidentStage">
          <President />
        </div>
      </div>
    </>

  );
}

export function renderToDom(container) {
  render(<Main />, container);
}

