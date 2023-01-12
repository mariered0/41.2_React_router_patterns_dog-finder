import React from "react";
import Nav from "./Nav"
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import './App.css';

function App() {

  const data = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: 'whiskey',
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: 'duke',
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: 'perry',
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: 'tubby',
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={data.dogs}/>
        </Route>
        <Route path="/dogs/:name">
          <DogDetails 
            dogs={data.dogs}/>
        </Route>
        <Redirect to="/dogs" />
      </Switch>

    </div>
  );
}

export default App;
