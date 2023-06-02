import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

const FindDog = ({dogs}) => {
    const {name} = useParams();
    if (name) {
        const curDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        )
        return <DogDetails dog={curDog} />
    }
    return null;
}

export default FindDog;