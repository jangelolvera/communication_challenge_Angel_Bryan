import React, { useState, useRef } from 'react';
import './App.css';
import formulario from './formulario.jpeg';

function App() {

  const [status, setStatus] = useState('');

  function handleSubmit(event) {

    event.preventDefault();

    let emptyVal;
    let dispArr = document.querySelectorAll(".hinput");

    for (let i = 0; i < 17; i++) {

      if (event.target[i].value === '') {

        emptyVal = true;

      }

      dispArr[i].value = event.target[i].value;

    }

    if (emptyVal === true) {

      alert("ingresa todos los campos!!");

    } else {

      setStatus('complete');
      
      for(let i=0; i<17; i++){
        event.target[i].readOnly=true;
      }

    }

  }

  function handleClick(event){
    setStatus('');

    let writeAgain= document.querySelectorAll(".datos");
    for(let i=0; i<17; i++){
      writeAgain[i].readOnly=false;
    }


  }

  return (
    <div className="App">

      <h2>Fill in the blanks</h2>

      <form
        id="blanks"
        onSubmit={handleSubmit}
        value={status} 
        >

        <label htmlFor="recipient">Name of recipient: </label>
        <input id="recipient" className="datos" type="text" />

        <label htmlFor="sender">Name of sender: </label>
        <input id="sender" className="datos" type="text" />

        <label htmlFor="relationship">Relationship: </label>
        <input id="relationship" className="datos" type="text" />

        <label htmlFor="yourevent">Event: </label>
        <input id="yourevent" className="datos" type="text" />

        <label htmlFor="modifier">Modifier: </label>
        <input id="modifier" className="datos" type="text" />

        <label htmlFor="emotion">Emotion: </label>
        <input id="emotion" className="datos" type="text" />

        <label htmlFor="namesend">Name of sender: </label>
        <input id="sender" className="datos" type="text" />

        <label htmlFor="activity">Activity: </label>
        <input id="activity" className="datos" type="text" />

        <label htmlFor="secondact">Second activity: </label>
        <input id="secondact" className="datos" type="text" />

        <label htmlFor="unplanned">Unplanned activity: </label>
        <input id="unplanned" className="datos" type="text" />

        <label htmlFor="weekday">Day of the week: </label>
        <input id="weekday" className="datos" type="text" />

        <label htmlFor="month">Month: </label>
        <input id="month" className="datos" type="text" />

        <label htmlFor="day">Day: </label>
        <input id="day" className="datos" type="text" />

        <label htmlFor="year">Year: </label>
        <input id="year" className="datos" type="text" />

        <label htmlFor="time">Start time: </label>
        <input id="time" className="datos" type="text" />

        <label htmlFor="location">Location/ Address: </label>
        <input id="location" className="datos" type="text" />

        <label htmlFor="addnote">Additional notes: </label>
        <input id="addnote" className="datos" type="text" />

        <div id="buttons">
          <button type="reset" id="resbtn" onClick={handleClick}>Reset</button>
          <button type="submit" id="genbtn">Generate</button>
        </div>

      </form>

      <div id="disInfo">

        <input id="hidden0" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden1" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden2" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden3" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden4" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden5" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden6" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden7" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden8" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden9" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden10" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden11" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden12" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden13" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden14" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden15" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />
        <input id="hidden16" className="hinput" type="text" defaultValue={status.value} onSubmit={handleSubmit} />


      </div>

      <img src={formulario}/>
    </div>
  );
}

export default App;
