import React , {useState} from "react";
import app from "../src/app.css" ;




function App() {

  const randomNumber = Math.floor(Math.random()*10);
  const randomNumber2 = Math.floor(Math.random()*10);

  const [number , setNumber] = React.useState(0);

 const  result = randomNumber*randomNumber2;

  return (
    <div className="App">
      <p> poczatkowa liczba to {number} </p>
      <p> pierwsya liczba to {randomNumber}</p>
      <p> druga liczba liczba to {randomNumber2}</p>

      <h1> Jaki jest wynik działania :  {randomNumber} razy {randomNumber2}</h1>
      <h2> Wynik mnożenia to : {result}</h2>
      

      <button onClick={ () => setNumber(number+1)}> Click me to add 1</button>
     
    </div>
  );
}

export default App;
