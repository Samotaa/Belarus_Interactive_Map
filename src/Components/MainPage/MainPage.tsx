import * as React from 'react';
import { render } from 'react-dom';


import Info from '../textAboutBLR/SomeInfo'
import Title from '../title/title';
import Nav from '../navbar/NavBar';
import Places from '../places/places';
import Population from '../Population/Population';
import President from '../President/President'
import TextAbout from '../PresidentText/TextAboutPresident'

import styles from './styles.module.css'

import { Parallax } from "react-parallax";


const style = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const image1 = '../../back.jpg'

export default function Main() {


  return (
    <>
      <div className={styles.container}>
        <Info />
        <div className="mainBlock">
          <Title />
          <div style={style}>
            <Parallax bgImage={image1} strength={300}>
              <div style={{ height: 800 }}>
              </div>
            </Parallax>
          </div>
        </div>
    
        <div className="mainStage">
            <Places />
            <Population />
        </div>

        <div className="PresidentStage">
          <TextAbout />
          <President />
        </div>
        <Nav />
      </div>
    </>


  );
}

export function renderToDom(container) {
  render(<Main />, container);
}

