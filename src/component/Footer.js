import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className='Footer'>
            <Container fluid={true}>
                <Row>
                    <Col md={3} xs={2}>
                        <ul id='footerLink'>
                            <li>Support</li>
                            <li>Help center</li>
                            <li>Safety Information</li>
                            <li>Cancellation options</li>
                            <li>Our Covid-19 Response</li>
                            <li>Report neighborhood concern</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={2}>
                        <ul id='footerLink'>
                            <li>Community</li>
                            <li>Airbnb.org: disaster relief housing</li>
                            <li>Support Afghan refugees</li>
                            <li>Celebrity diversity & belonging</li>
                            <li>Combating discrimination</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={2}>
                        <ul id='footerLink'>
                            <li>Hosting</li>
                            <li>Try hosting</li>
                            <li>AirCover: protection for Hosts</li>
                            <li>Explore hosting resources</li>
                            <li>Visit our community forum</li>
                            <li>How to host responsibly</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={2}>
                        <ul id='footerLink'>
                            <li>About</li>
                            <li>Newsroom</li>
                            <li>Learn about new features</li>
                            <li>Letter from our founders</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Airbnb Luxe</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <li>&copy; 2021 Airbnb, Inc.</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Sitemap</li>
                        </ul>
                    </Col>
                    <Col>
                        <div>
                            <a href='#'><i class="bi bi-globe"></i> English(US)</a>
                            <a href='#'><i class="bi bi-currency-euro"></i> EUR</a>
                        </div>
                        <div>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-instagram"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
