import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

function SearchBar() {
    return (
        <div className='SearchBar'>
            <Container>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default SearchBar
