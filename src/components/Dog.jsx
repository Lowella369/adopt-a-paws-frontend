import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Dog(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  />
                <Card.Body>
                    <img className="item-img" src={props.dog.image} alt='{props.dog.name}' />
                    <Card.Title>Name: {props.dog.name}</Card.Title>
                    <Card.Text className='card-text'>
                        Age: {props.dog.age} y old
                        <br/>
                        Breed: {props.dog.breed}
                    </Card.Text>
                    <Link to={`/dogs/${props.dog.id}`}><Button variant="primary">View</Button></Link>
                </Card.Body>
        </Card>        
    );
}

export default Dog;