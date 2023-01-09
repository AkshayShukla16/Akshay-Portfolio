import React from 'react'
import { Container, Row, Col,Nav,Tab } from 'react-bootstrap';
import projectImg1 from '../assets/img/project-img1.jpg'
import projectImg2 from '../assets/img/project-img2.jpg'
import projectImg3 from '../assets/img/project-img3.png'
import Weather from '../assets/img/weather.jpg'
import QRCode from '../assets/img/qrcode.png'
import RandomColor from '../assets/img/RandomColor.png'

import ProjectCards from './ProjectCards'
import colorSharp2 from '../assets/img/color-sharp2.png'

function Projects() {
    const NetURL= "https://app.netlify.com/teams/akshayshukla16/sites";
    const projects = [
        {
            title: "Weather App",
            description: "It gives the info about climate which include temp,weather condition, humidity & feels-like. It uses the openweathermap API to get all Information",
            imageUrl: Weather,
            Github: "https://github.com/AkshayShukla16/My-Weather-App"
        },
        {
            title: "QR-Code Generator",
            description: "This web App generate a QR-Code for your company or any public, commercial & self business. It has ability to produce & resize the code and also provide the download option ",
            imageUrl: QRCode,
            Github: "https://github.com/AkshayShukla16/QR-Code-Generator"
        },
        {
            title: "Color Generator",
            description: "It gives the random color on a mouse clicked which you can used in your project. It also produces the rgb() code for a generated color",
            imageUrl: RandomColor,
            Github: "https://github.com/AkshayShukla16/Random-Color-Generator"
        },
        {
            title: "Arriving Soon!",
            description: "No Info",
            imageUrl: projectImg1
        },
        {
            title: "Arriving Soon!",
            description: "No Info",
            imageUrl: projectImg2
        },
        {
            title: "Arriving Soon!",
            description: "No Info",
            imageUrl: projectImg3
        }
    ];
    return (
        <div>
            <section className='project' id='project'>
                <Container>
                    <Row>
                        <Col>
                            <h2>My Projects</h2>
                            <p>This Activity include the front-end, back-end, API based projects, Core-Concept based, Basic-level projects, Full-stack project and many more..</p>
                            <p>It gives me immense Knowledge of how to implement the concept of developing & programming in real world scenario. Building a projects include 'plan', 'design', 'plot', 'execute', 'maintainence' etc. as a result it reflect out great opportunity for me to get deeper into the concept based learning system and implementation.</p>
                            <p style={{color: 'aqua'}} ><span>Check out my all Project (live) at: </span><a style={{textDecoration: 'none', color: 'yellow'}} href={NetURL} target='_blank'>Netlify (Click here)</a></p>
                            <Tab.Container id='projects-tabs' defaultActiveKey="first">
                            <Nav variant="tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="listTab">
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((val,index)=>{
                                                return(
                                                    <ProjectCards 
                                                    key={index}
                                                    {...val}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}></img>
            </section>
        </div>
    )
}

export default Projects
