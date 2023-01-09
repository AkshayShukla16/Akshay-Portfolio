import React from 'react'
import { Button, Col } from 'react-bootstrap'

function ProjectCards({title, description, imageUrl,Github}) {
  return (
    <Col sm={6} md={4}>
    <div className='proj-imgbx'>
        <img src={imageUrl}></img>
        <div className='proj-txtx'>
            <h4>{title}</h4>
            <h6>{description}</h6>
            <a href={Github} target='_blank'>Github</a>
        </div>
    </div>
    </Col>
  )
}

export default ProjectCards
