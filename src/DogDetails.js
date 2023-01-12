import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.filter(function (dog) {
    return dog.name === name;
  });

  return (
    <div>
      <h1>{name}</h1>
      <img src={`../images/${dog[0].src.toLowerCase()}.jpg`} />
      <ul style={{ listStyleType: "none" }}>
        <li>Age: {dog[0].age}</li>
      </ul>
      <ul style={{ listStyleType: "none" }}>
        {dog[0].facts.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
