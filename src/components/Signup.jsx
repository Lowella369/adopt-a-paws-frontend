import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Signup() {
    //store the form validation in state
    const [validated, setValidated] = useState(false)

    //set an initial state for the form
    const initialState = {username:'',password:'',cpassword:''}

    //store the dog form in state
    const [formState, setFormState]= useState(initialState)

    const [message, setMessage]=useState(false)

    //update email, username and password state when an input changes
    const handleChange = (e) => {
      setMessage(false)
      setFormState({...formState, [e.target.id]: e.target.value})
      checkPassword()
    }
  
    const checkPassword = () => {
      if(formState.password !== formState.cpassword) {
        setMessage(true)
      }
    }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
          //call postNewUser function to add new user to the database
          postNewUser()
      }
  
      setValidated(true);
    };

    //create or add new user to the database
    const postNewUser = async () => {
        await fetch(`http://localhost:3000/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formState.email,
                username: formState.username,
                password: formState.password,
                confirm: formState.cpassword
            })
        })
    }
  
    return (
      <div className='main'>
        <div className='content'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
            <div >
            </div>
            <Form.Group as={Row} md='12' controlId='validationEmail'>
                <Form.Label column sm={2}>Email</Form.Label>
                <Col sm={10}>
                <Form.Control
                  required
                  type='email'
                  placeholder='Email'
                  name='email'
                  id='email'
                  onChange={handleChange}/>
                <Form.Control.Feedback type='invalid'>Please enter a valid email.</Form.Control.Feedback>
                </Col>
                
              </Form.Group>
              <Form.Group as={Row} md='12' controlId='validationCustom01'>
                <Form.Label column sm={2}>User Name</Form.Label>
                <Col sm={10}>
                <Form.Control
                  required
                  type='text'
                  placeholder='User name'
                  name='username'
                  id='username'
                  onChange={handleChange}/>
                <Form.Control.Feedback type='invalid'>User Name must not be empty.</Form.Control.Feedback>
                </Col>
                
              </Form.Group>
              <Form.Group as={Row} md='12' controlId='validationCustom03'>
                <Form.Label column sm={2}>Enter Password</Form.Label>
                <Col sm={10}>
                <Form.Control 
                type='password' 
                placeholder='Password' 
                name='password'
                id='password'
                required 
                onChange={handleChange}/>
                <Form.Control.Feedback type='invalid'>
                  Password must not be empty.
                </Form.Control.Feedback>
                </Col>
                
              </Form.Group>
              <Form.Group as={Row} md='12' controlId='validationCustom04'>
                <Form.Label column sm={2}>Confirm Password</Form.Label>
                <Col sm={10}>
                <Form.Control 
                type='password' 
                placeholder='Confirm Password' 
                required 
                name='cpassword'
                id='cpassword'
                onChange={handleChange}
                isInvalid={message}/>
                <Form.Control.Feedback type='invalid'>
                  Password does not match.
                </Form.Control.Feedback>
                </Col>
                
              </Form.Group>
            </Row>
            <Button type='submit'>Sign Up</Button>
          </Form>
        </div>
      </div>
    );
  }
  
 export default Signup