import React from "react";
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {


    return (
        <div>
            <h1>dogs</h1>
            <ul style={{listStyleType: 'none'}}>
                { dogs.map(dog => <li key={dog.name}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>) }
            </ul>
        </div>
    )
}

export default DogList;

