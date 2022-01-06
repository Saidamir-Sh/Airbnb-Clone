import React from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import '../styles/Navbar.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from 'react-bootstrap'

function Navbar() {
    return (
        <Container className='pt-2' fluid={true} style={{backgroundColor: '#000', fontSize: '1rem', fontWeight: 'light'}}>
            <Row className='d-flex justify-content-between align-items-center text-white' style={{width: '93%', margin: '0 auto'}}>
                <Col md={2}>
                    <img src={logo} style={{width: '6rem'}}/>
                </Col>
                <Col id='nav-links' md={4} className='d-flex justify-content-between align-items-center mt-3 ml-5'>
                    <a href='#'>Places to stay</a>
                    <a href='#'>Experiences</a>
                    <a href='#'>Online Experiences</a>
                </Col>
                <Col md={3} className='d-flex justify-content-around align-items-center'>
                    <p className='mt-3'>Become a Host</p>
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
