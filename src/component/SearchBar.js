import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

function SearchBar() {
    return (
        <div className='SearchBar'>
            <Container className="container-100">
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="location">
                          <Form.Label>Location</Form.Label>
                          <Form.Control id='location' type="text" placeholder="Where are you going ?" style={{}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                          <Form.Label>Check in</Form.Label>
                          <Form.Control id='date' type='date' placeholder='Add dates'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                          <Form.Label>Check out</Form.Label>
                          <Form.Control id='date' type='date' placeholder='Add dates'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                          <Form.Label>Guests</Form.Label>
                          <Form.Control id='date' type='text' placeholder='Add guests'/>
                        </Form.Group>
                        <div>
                            <i class="bi bi-search"></i>
                        </div>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default SearchBar
