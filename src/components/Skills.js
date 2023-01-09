
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import dom from '../assets/img/dom.png'
import javascript from '../assets/img/javascript.png'
import json from '../assets/img/json.png'
import presentation from '../assets/img/presentation.png'
import mongodb from '../assets/img/monodb.png'
import api from '../assets/img/api.png'
import sql from '../assets/img/sql.png'
import react from '../assets/img/react.png'
import node from '../assets/img/node.png'
import cpr from '../assets/img/c.png'
import cpp from '../assets/img/cpp.png'
import colorSharp from '../assets/img/color-sharp.png'


export default function Skills(){
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx">
                          <h2>Skills & Tech Stack</h2>
                          <p>The ability to use one's knowledge effectively and readily in execution or performance.<br></br> An ability to do an activity or job well, especially because you have practised it.</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={html} alt="Image" />
                                  <h5>HTML</h5>
                              </div>
                              <div className="item">
                                  <img src={css} alt="Image" />
                                  <h5>CSS</h5>
                              </div>
                              <div className="item">
                                  <img src={javascript} alt="Image" />
                                  <h5>JavaScript</h5>
                              </div>
                              <div className="item">
                                  <img src={dom} alt="Image" />
                                  <h5>DOM Manipulation</h5>
                              </div>
                              <div className="item">
                                  <img src={json} alt="Image" />
                                  <h5>JSON</h5>
                              </div>
                              <div className="item">
                                  <img src={api} alt="Image" />
                                  <h5>API</h5>
                              </div>
                              <div className="item">
                                  <img src={react} alt="Image" />
                                  <h5>React Js</h5>
                              </div>
                              <div className="item">
                                  <img src={sql} alt="Image" />
                                  <h5>SQL</h5>
                              </div>
                              <div className="item">
                                  <img src={mongodb} alt="Image" />
                                  <h5>Mongo DB</h5>
                              </div>
                              <div className="item">
                                  <img src={node} alt="Image" />
                                  <h5>Node Js</h5>
                              </div>
                              <div className="item">
                                  <img src={presentation} alt="Image" />
                                  <h5>Presentation</h5>
                              </div>
                              <div className="item">
                                  <img src={cpr} alt="Image" />
                                  <h5>C-Programming</h5>
                              </div>
                              <div className="item">
                                  <img src={cpp} alt="Image" />
                                  <h5>C++</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image"></img>
      </section>
    )
  }