import React , {useState} from "react";
import app from "../src/app.css" ;




function App() {


  const handlerandomNumbers = () => {
    const randomNumber = Math.floor(Math.random()*10);
    const randomNumber2 = Math.floor(Math.random()*10);
    const  result = randomNumber*randomNumber2;
    

  }


  const [number , setNumber] = React.useState(0);
  const [value, setValue] = React.useState('') ;
 

 

  const handleOnChange = event => setValue(event.target.value);

  const handleOnClickButton = () => { console.log("dziala")
  

  if(result == value) {
    console.log("zgadles !!!")
    document.getElementById('demo').innerHTML = " Zgadles";
  }else(document.getElementById('demo').innerHTML = " proboj dalej")
};

  


  return (
    <div className="App">
      <p> Ilosc zadan : {number} </p>
      <p> pierwsza liczba to {randomNumber}</p>
      <p> druga liczba liczba to {randomNumber2}</p>

      <h1> Jaki jest wynik działania :  {randomNumber} razy {randomNumber2}</h1>
      <h2> wynik mnożenia to : {result}</h2>
      <h2> twoja liczba to : {value}</h2>



      <input  type = "number"  id = "myNumber" value = {value} onChange = {handleOnChange}></input>

      <p id="demo"></p>
     

        <button onClick={handlerandomNumbers}> Losuj liczby</button>
        <button onClick={handleOnClickButton}>Zatwierdzam</button>
        <button onClick={ () => setNumber(number+1)}> Nastepne zadanie </button>
     
    </div>
  );
}

export default App;
