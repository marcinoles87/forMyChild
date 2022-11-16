import React , {useEffect , useState } from "react";
import app from "../src/app.css" ;

const handlerandomNumbers = () => {
  var x =  Math.floor(Math.random()*10)
  console.log(x);

  return x;
}

 



function App() {

  const randomNumber = Math.floor(Math.random()*10);
  const randomNumber2 = Math.floor(Math.random()*10);

  const [number , setNumber] = React.useState(0);
  const [value, setValue] = React.useState('') ;
 

 const  result = randomNumber*randomNumber2;


  const handleOnChange = event => setValue(event.target.value);

  
 
    
   

  const handleOnClickButton = () => {
  
  if(result == value) {
    console.log("zgadles !!!")
    document.getElementById('demo').innerHTML = " Zgadles";
  }else{
    document.getElementById('demo').innerHTML = " proboj dalej";
    setValue('')}
};

  


  return (
    <div className="App">
      <p> Ilosc zadan : {number} </p>
      <p> pierwsza liczba to {randomNumber}</p>
      <p> druga liczba liczba to {randomNumber2}</p>

      <h1> Jaki jest wynik działania :  {randomNumber} razy {randomNumber2}</h1>
      <h2> wynik mnożenia to : {result}</h2>
      <h2> twoja liczba to : {value}  {handlerandomNumbers} </h2>



      <input  type = "number"  id = "myNumber" value = {value} onChange = {handleOnChange}></input>

      <p id="demo"></p>
     

        <button onClick={handlerandomNumbers}> Losuj liczby</button>
        <button onClick={handleOnClickButton}>Zatwierdzam</button>
        <button onClick={ () => setNumber(number+1)}> Nastepne zadanie </button>
     
    </div>
  );
}

export default App;
