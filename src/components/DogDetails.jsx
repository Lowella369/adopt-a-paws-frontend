import React,{useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

function DogDetails() {
    //get the id from the Route parameters
    let { id } = useParams();

    //dogState will store the specific dog we fetch
    const [dogState, setDogState]=useState({})

    //function to fetch dogs and store in state
    const fetchDogDetails = async () =>{
        try{
            console.log(id)
            const response = await fetch(`http://localhost:3000/dogs/${id}`, {
            method: 'GET'
            });
            const responseJSON = await response.json()
            //updates state with dog list
            console.log(responseJSON)
            setDogState(responseJSON.dog)
        } catch(err) {
        console.log(err)
        }
    }
    
    //useEffect will call the fetchDogDetails when this component mounts
    useEffect(() => {
        fetchDogDetails()
    },[id])

    return (
        <div className='container'>
            <div className='main'>
                <div className='content'>
                <img className="item-img" src={dogState.image} alt={dogState.name} />
                <p className='dog-info'>{dogState.info}</p>
                <Link to="/dogs">Back</Link>
                </div>
            </div>
        </div>
    );
}

export default DogDetails;