import AnimalShow from "./AnimalShow";
import { useState } from "react";
import './App.css';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random()*animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const handleClickRemove = () => {
    setAnimals(animals.slice(0, -1))
  }

  const renderedAnimals = animals.map((animal, index)=> {
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <div className="app">
    <h1>&lt;React 💕&gt;</h1>
    <h2>Click on the green button to add an animal and red button to remove.<br />
      Then click on the animal to enlarge the heart 💗
    </h2>
      <div id="button_container">
        <button className="add-button" onClick={handleClick}>Add animal</button>
        <button className='remove-button' onClick={handleClickRemove}>Remove animal</button>
      </div>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;