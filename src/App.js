import React , {useState} from "react";
import app from "../src/app.css" ;




function App() {

  const randomNumber = Math.floor(Math.random()*10);
  const randomNumber2 = Math.floor(Math.random()*10);

  const [number , setNumber] = React.useState(0);
  const [value , setValue] = React.useState('');

  const matchResult = false;

 const  result = randomNumber*randomNumber2;


 const handleOnChange = (e) => setValue(e.target.value) ; e.preventDefault();

 const handleOnClickButton = () => {
  if(result === value ) {
      matchResult = !matchResult ;
  }
 
}

  return (
    <div className="App">
      <p> poczatkowa liczba to {number} </p>
      <p> pierwsza liczba to {randomNumber}</p>
      <p> druga liczba liczba to {randomNumber2}</p>

      <h1> Jaki jest wynik działania :  {randomNumber} razy {randomNumber2}</h1>
      <h2> Twoj wynik mnożenia to : {value}</h2>
      <h2> Podaj wynik mnożenia : 

        <input type="number" className="inputValue" onChange={handleOnChange} value={value}></input>
        
        </h2>

        <h1>  {matchResult ? "doskonale zgadles" : "sproboj jeszcze raz"}</h1>


        <button onClick={handleOnClickButton}>Zatwierdzam</button>




    

      <button onClick={ () => setNumber(number+1)}> Click me to add 1</button>
     
    </div>
  );
}

export default App;
