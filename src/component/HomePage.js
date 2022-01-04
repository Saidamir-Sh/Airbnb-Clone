import React from 'react'
import homeImage from '../assets/tent.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap'


function HomePage() {
    return (
        <div className='HomePage' >
            <Container fluid={true} style={{backgroundColor: '#000'}}>
                <Row>
                    <Col className='d-flex flex-column align-items-center position-relative'>
                        <img src={homeImage} width={'80%'} height={'90%'} />
                        <div className='d-flex align-items-center flex-column position-absolute' style={{bottom: '3rem'}}>
                            <h1 className='font-weight-bold text-white'>Not sure where to go ? Perfect</h1>
                            <Button variant="light" className='text-success font-weight-bold'>I am flexible</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage
