import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Inspiration() {
    return (
        <div className='Inspiration'>
            <Container>
            <h1>Inspiration for your next trip</h1>
                <Row className='d-flex justify-content-around'>
                    <Col md={3}  xs={1} s={2}>
                        <Card>
                            <Card.Img variant="top" src="https://q-xx.bstatic.com/images/hotel/max1024x768/204/204676165.jpg" />
                            <Card.Body className='pb-5'>
                              <Card.Title>Sapanca</Card.Title>
                              <Card.Text className='pb-5'>
                                155 kilometers away
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}  xs={1} s={2}>
                        <Card>
                            <Card.Img variant="top" src="https://q-xx.bstatic.com/images/hotel/max1024x768/204/204676165.jpg" />
                            <Card.Body className='pb-5'>
                              <Card.Title>Sapanca</Card.Title>
                              <Card.Text className='pb-5'>
                                155 kilometers away
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}  xs={1} s={2}>
                        <Card>
                            <Card.Img variant="top" src="https://q-xx.bstatic.com/images/hotel/max1024x768/204/204676165.jpg" />
                            <Card.Body className='pb-5'>
                              <Card.Title>Sapanca</Card.Title>
                              <Card.Text className='pb-5'>
                                155 kilometers away
                              </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}  xs={1} s={2}>
                        <Card>
                            <Card.Img variant="top" src="https://q-xx.bstatic.com/images/hotel/max1024x768/204/204676165.jpg" />
                            <Card.Body className='pb-5'>
                              <Card.Title>Sapanca</Card.Title>
                              <Card.Text className='pb-5'>
                                155 kilometers away
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
