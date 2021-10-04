import React, { useState, useRef } from 'react'; 
import './App.css';
import formulario from './formulario.jpeg';

function App() {

  const [status, setStatus]= useState('');

  function handleSubmit(event){
    event.preventDefault();
    let emptyVal;
      for(let i=0; i<17; i++){
        if(event.target[i].value===''){
          emptyVal=true;
        }
      }
    if(emptyVal===true){
      alert("ingresa todos los campos!!");
    }

  }

  return (
    <div className="App">

      <h2>Fill in the blanks</h2>

      <form 
        id="blanks" 
        onSubmit={handleSubmit}
        value={status} >
          
        <label htmlFor="recipient">Name of recipient: </label>
        <input id="recipient" type="text" />

        <label htmlFor="sender">Name of sender: </label>
        <input id="sender" type="text" />

        <label htmlFor="relationship">Relationship: </label>
        <input id="relationship" type="text" />

        <label htmlFor="yourevent">Event: </label>
        <input id="yourevent" type="text" />

        <label htmlFor="modifier">Modifier: </label>
        <input id="modifier" type="text" />

        <label htmlFor="emotion">Emotion: </label>
        <input id="emotion" type="text" />

        <label htmlFor="namesend">Name of sender: </label>
        <input id="sender" type="text" />

        <label htmlFor="activity">Activity: </label>
        <input id="activity" type="text" />

        <label htmlFor="secondact">Second activity: </label>
        <input id="secondact" type="text" />

        <label htmlFor="unplanned">Unplanned activity: </label>
        <input id="unplanned" type="text" />

        <label htmlFor="weekday">Day of the week: </label>
        <input id="weekday" type="text" />

        <label htmlFor="month">Month: </label>
        <input id="month" type="text" />

        <label htmlFor="day">Day: </label>
        <input id="day" type="text" />

        <label htmlFor="year">Year: </label>
        <input id="year" type="text" />

        <label htmlFor="time">Start time: </label>
        <input id="time" type="text" />

        <label htmlFor="location">Location/ Address: </label>
        <input id="location" type="text" />

        <label htmlFor="addnote">Additional notes: </label>
        <input id="addnote" type="text" />

        <div id="buttons">
          <button type="reset" id="resbtn">Reset</button>
          <button type="submit" id="genbtn">Generate</button>
        </div>

      </form>

      <div id="hoja">

      </div>
    </div>
  );
}

export default App;
