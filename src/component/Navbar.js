import React from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from 'react-bootstrap'

function Navbar() {
    return (
        <Container fluid={true} style={{backgroundColor: '#000', fontSize: '.9rem', fontWeight: 'bold'}}>
            <Row className='d-flex justify-content-between align-items-center text-white'>
                <Col md={2}>
                    <img src={logo} style={{width: '6rem'}}/>
                </Col>
                <Col md={4} className='d-flex justify-content-between align-items-center'>
                    <p>Place to stay</p>
                    <p>Experiences</p>
                    <p>Online Experiences</p>
                </Col>
                <Col md={2} className='d-flex justify-content-between align-items-center'>
                    <p className='mt-3 mp-5'>Become a Host</p>
                    <i class="bi bi-globe" />
                    <div className='d-flex justify-content-around align-items-center bg-white' style={{width: '4rem', border: '1px solid white', borderRadius: '15px'}}>
                        <i class="bi bi-list" style={{color: '#000'}}></i>
                        <img src={user} style={{width: '2rem', borderRadius: '50%'}}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar
