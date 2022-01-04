import React, { useRef } from 'react';
import '../styles/SearchBar.css'
import { Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

function SearchBar() {
  const ref = useRef()
    return (
        <div className='SearchBar'>
            <Container fluid={true} style={{backgroundColor: '#000'}}>
                <Row className='d-flex justify-content-center'>
                    <Form  className='d-flex justify-content-between align-items-center bg-white my-3 px-4' style={{borderRadius: '30px'}}>
                        <Form.Group className="mb-3" controlId="location">
                          <Form.Label className='bg-white w-100 font-wight-bold'>Location</Form.Label>
                          <Form.Control id='location' type="text" placeholder="Where are you going ?" style={{border: 'none'}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date-in">
                          <Form.Label>Check in</Form.Label>
                          <Form.Control 
                            id='date-in' 
                            type='text'  
                            placeholder='Add dates'
                            ref={ref}
                            onFocus={() => {ref.current.type = "date"}}
                            onBlur={() => (ref.current.type = "text")}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date-out">
                          <Form.Label>Check out</Form.Label>
                          <Form.Control 
                            id='date-out' 
                            type='text' 
                            placeholder='Add dates'
                            ref={ref}
                            onFocus={() => {ref.current.type = "date"}}
                            onBlur={() => (ref.current.type = "text")}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="date">
                          <Form.Label>Guests</Form.Label>
                          <Form.Control id='guests' type='number' placeholder='Add guests'/>
                        </Form.Group>
                        <div className='d-flex align-items-center justify-content-center' style={{width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: 'DarkSalmon'}}>
                            <i class="bi bi-search" style={{color: '#fff'}}></i>
                        </div>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default SearchBar
