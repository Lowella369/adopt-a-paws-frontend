import React,{useState,useEffect} from 'react';
import Dog from './Dog';
import {Row, Col, Container} from 'react-bootstrap'

function DogList() {
 const [dogs,setDogs] = useState([]);

    async function fetchDogs(){
        try{
            const response = await fetch('http://localhost:3000/dogs', {
              method: 'GET'
            });
            const dogsData = await response.json()
            //updates state with dog list
            setDogs(dogsData)
            console.log(dogsData)
        } catch(err) {
          console.log(err)
        }
      }
      useEffect(() => {
        fetchDogs()
      }, [])


    //maps through list of dogs, creating a component for each
    return (
      <div className='main'>
        <Container>
          <Row className='row'>
            {dogs.map((dog)=>{
                return <Col><Dog key={dog.id} dog={dog}/></Col>
            })}
          </Row>
        </Container>
      </div>
       
    );
}

export default DogList;
