import React,{useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerLogo from '../assets/img/robot.png'


function Banner() {
    const[loopNum, setLoopNum]= useState(0);
    const[remove, setRemove]= useState(false);
    const[text,setText]= useState('');
    const[trans,setTrans]= useState(200-Math.random()*100)
    const time= 500;

    useEffect(()=>{
        const ticker= setInterval(()=>{
           tick();
        },trans)
        return ()=>{clearInterval(ticker)}
    },[text])

    const tick= ()=>{
        let i =loopNum % toRotate.length
        let fullText= toRotate[i];
        let updateText= remove? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1)

        setText(updateText);
        if(remove){
            setTrans(prevTrans=>prevTrans/2);
        }
        if(!remove && updateText===fullText){
            setRemove(true);
            setTrans(time);
        }else if(remove && updateText===''){
            setRemove(false);
            setLoopNum(loopNum+1);
            setTrans(200);
        }
    }

    const toRotate= [ "BTech", "Undergrade", "Programmer","Blogger","Creative", "Web-dev", "designer"];
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-centre">
                   <Col xs-={12} md={6} xl={7}>
                     <span className="tagline">Welcome to my portfolio</span>
                     <h1>Hi! I am Akshay Shukla<br /></h1>
                     <h1>☞<span className="wrap">{text}</span></h1>
                     <p>Pursuing BTech In Computer Engineering</p>
                     <button><a href="#bloglink" target='_blank'>Visit to my blog</a></button>
                   </Col>
                   <Col xs-={12} md={6} xl={3}>
                    <img src={headerLogo} alt="header Img"></img>
                   </Col> 
                </Row>
            </Container>
        </section>
    )
}

export default Banner;
