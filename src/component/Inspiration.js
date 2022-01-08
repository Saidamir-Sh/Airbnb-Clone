import React from 'react'
import '../styles/Inspiration.css'
import sapanca from '../assets/sapanca.jpg'
import adalar from '../assets/Adalar.jpg'
import bodrum from '../assets/bodrum.jpg'
import bolu from '../assets/bolu.jpg'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Inspiration() {
    return (
        <div className='Inspiration py-5'>
            <Container>
            <h1 className='font-weight-bold'>Inspiration for your next trip</h1>
                <Row className='d-flex justify-content-around py-3'>
                    <Col md={3}  xs={1} s={2}>
                        <Card style={{backgroundColor: '#CB2C49', borderRadius: '15px'}}>
                            <Card.Img  variant="top" src={sapanca} />
                            <Card.Body className='pb-5 text-white'>
                              <Card.Title className='font-weight-bold'>Sapanca</Card.Title>
                              <Card.Text className='pb-5'>
                                155 kilometers away
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}  xs={1} s={2}>
                        <Card style={{backgroundColor: '#DC304F', borderRadius: '15px'}}>
                            <Card.Img variant="top" src={adalar} />
                            <Card.Body className='pb-5 text-white'>
                              <Card.Title className='font-weight-bold'>Adalar</Card.Title>
                              <Card.Text className='pb-5'>
                                20 kilometers away
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}  xs={1} s={2}>
                        <Card style={{backgroundColor: '#BC186D', borderRadius: '15px'}}>
                            <Card.Img variant="top" src={bodrum} />
                            <Card.Body className='pb-5 text-white'>
                              <Card.Title className='font-weight-bold'>Bodrum</Card.Title>
                              <Card.Text className='pb-5'>
                                462 kilometers away
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}  xs={1} s={2}>
                        <Card style={{backgroundColor: '#D83A2F', borderRadius: '15px'}}>
                            <Card.Img variant="top" src={bolu} />
                            <Card.Body className='pb-5 text-white'>
                              <Card.Title className='font-weight-bold'>Bolu</Card.Title>
                              <Card.Text className='pb-5'>
                                225 kilometers away
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Inspiration
