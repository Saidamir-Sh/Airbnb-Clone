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
                        <div className='d-flex align-items-center flex-column position-absolute' style={{bottom: '25%'}}>
                            <h1 className='font-weight-bold text-white'>Not sure where to go ? Perfect</h1>
                            <Button variant="light" style={{color: 'purple', borderRadius: '50px'}} className=' font-weight-bold px-4 py-3'>I am flexible</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage
