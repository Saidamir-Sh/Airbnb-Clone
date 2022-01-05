import React from 'react'
import sea from '../assets/sea.jpg'
import seaskate from '../assets/seaskate.jpg'
import { Container, Row, Col } from 'react-bootstrap'

function Discover() {
    return (
        <div className='Discover'>
            <Container>
                <h1>Discover Airbnb Experiences</h1>
                <Row>
                    <Col md={6} xs={12}>
                        <img src={sea} width={'100%'}/>
                    </Col>
                    <Col md={6} xs={12}>
                        <img src={seaskate} width={'100%'} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Discover
