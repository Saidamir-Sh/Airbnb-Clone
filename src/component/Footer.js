import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className='Footer'>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>Support</li>
                            <li>Help center</li>
                            <li>Safety Information</li>
                            <li>Cancellation options</li>
                            <li>Our Covid-19 Response</li>
                        </ul>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row></Row>
            </Container>
        </div>
    )
}

export default Footer
