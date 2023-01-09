import React,{useRef}  from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../assets/img/Contact1.png'
import myImg2 from '../assets/img/Contact2.png'
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ayqvs52', 'template_hvk5xof', form.current, 'MKkeNeqkZH8eFuROh')
        .then((result) => {
            alert("Message Sent Successfully!!")
        }, (error) => {
            alert('Something went wrong!')  
        });
    };

  return (
        <section className='contact' id='connect'>
              <Container>
                <Row className='align-items-center'>
                <Col md={5}>
                    <img src={myImg} alt='Contact Us'></img>
                 </Col> 
                 <Col md={6}>
                      <h2>Pleasure! to Join with you</h2>
                      <h3>Get In Touch</h3>
                      <form ref={form} onSubmit={sendEmail}>
                        <Row>
                          <Col sm={6} className='px-1'>
                          <input type='text' placeholder='Name' name='name' required />
                          </Col>
                          <Col sm={6} className='px-1'>
                          <input type='email' name='email' placeholder='Email Id'required />
                          </Col>
                          <Col sm={12}>
                          <textarea name='message' placeholder='Type Your Message' required />
                          <button type='submit'>Send</button>
                          </Col>
                        </Row>
                      </form>
                    </Col>
                </Row>
              </Container>
              
        </section>
  )
}

export default Contact

