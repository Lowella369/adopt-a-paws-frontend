import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


function NewDogForm(props) {
    //store the form validation in state
    const [validated, setValidated] = useState(false)

    //set an initial state for the form
    const initialState = {name:'',breed:'',age:'',color:'',weight:'',image:'',description:''}

    //store the dog form in state
    const [formState, setFormState]= useState(initialState)

    //store the fileUrl in state
    const [fileUrl, setFileUrl] = useState(null);

    //update name,breed,color,age,weight and image state when an input changes
    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }
  
    const handleSubmit = (event) => {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      } else {
          //call the postNewDog function to add new dog to the database
          postNewDog()

          //reset form
          setFormState(initialState)
      }
      
      setValidated(true)
    };

    //create or add new dog to the database
    const postNewDog = async () => {
        await fetch(`http://localhost:3000/new-dog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formState.name,
                breed: formState.breed,
                age: formState.age,
                color: formState.color,
                weight: formState.weight,
                image: formState.image,
                info: formState.description
            })
        })
    }

    function processImage(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
     }
  
    return (
        <div className='container'>
            <div className='main'>
            <div className='content'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Form.Group as={Row} className='mb-3' controlId='validationCustom01'>
                        <Form.Label column sm={2}>Name</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                            required
                            type='text'
                            placeholder='Name'
                            name='name'
                            id='name'
                            onChange={handleChange}/>
                            <Form.Control.Feedback type='invalid'>Please provide valid name.</Form.Control.Feedback>
                            </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlId='validationCustom02'>
                        <Form.Label column sm={2}>Breed</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                            required
                            type='text'
                            placeholder='Breed'
                            name='breed'
                            id='breed'
                            onChange={handleChange}/>
                            <Form.Control.Feedback type='invalid'>Please provide valid breed.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlId='validationCustom05'>
                        <Form.Label column sm={2}>Age</Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type='number' 
                            placeholder='Age' 
                            required 
                            name='age'
                            id='age'
                            onChange={handleChange}/>
                            <Form.Control.Feedback type='invalid'>Please provide a valid age.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlId='validationCustom03'>
                        <Form.Label column sm={2}>Color</Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type='text' 
                            placeholder='Color' 
                            required 
                            name='color'
                            id='color'
                            onChange={handleChange}/>
                            <Form.Control.Feedback type='invalid'>Please provide a valid color.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlId='validationCustom04'>
                        <Form.Label column sm={2}>Weight</Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type='number' 
                            placeholder='Weight' 
                            required 
                            name='weight'
                            id='weight'
                            onChange={handleChange}/>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid weight.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlId='image'>
                        <Form.Label column sm={2}>Image URL</Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type='text' 
                            placeholder='Image URL' 
                            required 
                            name='image'
                            id='image'
                            onChange={handleChange}/>
                            <Form.Control.Feedback type='invalid'>Please provide a valid color.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className='mb-3' controlId='exampleForm.ControlTextarea1'>
                        <Form.Label column sm={2}>Description</Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                as='textarea' rows={3}
                                placeholder='Description' 
                                required 
                                name='description'
                                id='description'
                                onChange={handleChange}/>
                                <Form.Control.Feedback type='invalid'>
                                    Description cannot be empty.
                                </Form.Control.Feedback>
                            </Col>
                    </Form.Group>
                </Row>
                <Button type='submit'>Add Dog</Button>
            </Form>
            </div>
            </div>
        </div>
    );
  }

export default NewDogForm;