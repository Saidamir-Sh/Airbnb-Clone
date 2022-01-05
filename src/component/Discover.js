import React from 'react'
import sea from '../assets/sea.jpg'
import forest from '../assets/forest.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Discover() {
    return (
        <div className='Discover'>
            <Container>
                <h1>Discover Airbnb Experiences</h1>
                <Row>
                    <Col md={6} xs={12} className='position-relative'>
                        <img src={sea} width={'100%'}/>
                        <div className='position-absolute' style={{width: '50%',top: '2rem', left: '2em'}}>
                            <h2>Things to do on your trip</h2>
                            <Button variant='light'>Experiences</Button>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <img src={forest} width={'100%'} />
                        <div className='position-absolute' style={{width: '50%',top: '2rem', left: '2em'}}>
                            <h2>Things to do from home</h2>
                            <Button variant='light'>Experiences</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Discover
