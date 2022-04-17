import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
    position: absolute;
    left: 30%;
    top: 26rem;
    z-index: 1;
    text-align: center;
    strong {
      font-size: 1em;
    }

    div {
      color: ${props => props.theme.titleColor};
      text-shadow: 3px 2px 5px rgba(0, 0, 0, 1);
      font-weight: 100;
      .main {
        font-size: 1em;
      }
      .sub {
      font-size: 1em;
      

      }
    }
`;

const TitleMessage = () => (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main">
            <span>
              <strong>
                Добро пожаловать в
              </strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Красивую", "Благополочную", "Дружественную", "Прекрасную", "Развитую", "Мирную"],
                autoStart: true,
                loop: true,
                delay: 100
              }}
            />
          </div>
            <strong>
              Республику Беларусь
            </strong>
        </div>
      </div>
    </MyTitleMessage>
  );
  
  export default TitleMessage;