import { render } from '@testing-library/react';
import React, { useState, useRef } from 'react';
import './App.css';
import formulario from './formulario.jpeg';

function App() {

  const [status, setStatus] = useState('');

  function handleSubmit(event) {

    event.preventDefault();

    let emptyVal;
    let cont= document.getElementById('container');

    if(cont){
      cont.remove();
    }

    for (let i = 0; i < 16; i++) {

      if (event.target[i].value === '') {

        emptyVal = true;

      }

    }

    if (emptyVal === true) {

      alert("ingresa todos los campos!!");

    } else {

      for(let i=0; i<16; i++){
        event.target[i].readOnly=true;
      }

      setStatus('complete');
      
      render(
        <div id="container">

          <div id="disInfo" style={{
            backgroundImage: `url(${formulario})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>

            <input id="hidden0" className="hinput" type="text" readonly="readonly" defaultValue={event.target[0].value} />
            <input id="hidden1" className="hinput" type="text" readonly="readonly" defaultValue={event.target[1].value} />
            <input id="hidden2" className="hinput" type="text" readonly="readonly" defaultValue={event.target[2].value} />
            <input id="hidden3" className="hinput" type="text" readonly="readonly" defaultValue={event.target[3].value} />
            <input id="hidden4" className="hinput" type="text" readonly="readonly" defaultValue={event.target[4].value} />
            <input id="hidden5" className="hinput" type="text" readonly="readonly" defaultValue={event.target[5].value} />
            <input id="hidden6" className="hinput" type="text" readonly="readonly" defaultValue={event.target[6].value} />
            <input id="hidden7" className="hinput" type="text" readonly="readonly" defaultValue={event.target[7].value} />
            <input id="hidden8" className="hinput" type="text" readonly="readonly" defaultValue={event.target[8].value} />
            <input id="hidden9" className="hinput" type="text" readonly="readonly" defaultValue={event.target[9].value} />
            <input id="hidden10" className="hinput" type="text" readonly="readonly" defaultValue={event.target[10].value} />
            <input id="hidden11" className="hinput" type="text" readonly="readonly" defaultValue={event.target[11].value} />
            <input id="hidden12" className="hinput" type="text" readonly="readonly" defaultValue={event.target[12].value} />
            <input id="hidden13" className="hinput" type="text" readonly="readonly" defaultValue={event.target[13].value} />
            <input id="hidden14" className="hinput" type="text" readonly="readonly" defaultValue={event.target[14].value} />
            <input id="hidden15" className="hinput" type="text" readonly="readonly" defaultValue={event.target[15].value} />

          </div>
        </div>
      );


    }


  }

  function handleClick(event) {

    if (status==='complete') {

      setStatus('');

      let writeAgain = document.querySelectorAll(".datos");
      let cont= document.getElementById('container');


      for (let i = 0; i < 16; i++) {
        writeAgain[i].readOnly = false;
      }

      cont.remove();


    }
    else{
      alert("No hay contenido para resetear");
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
        <div id="firstrow">

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

        </div>

        <div id="secondrow">
          <label htmlFor="emotion">Emotion: </label>
          <input id="emotion" className="datos" type="text" />

          <label htmlFor="activity">Activity: </label>
          <input id="activity" className="datos" type="text" />

          <label htmlFor="secondact">Second activity: </label>
          <input id="secondact" className="datos" type="text" />

          <label htmlFor="unplanned">Unplanned activity: </label>
          <input id="unplanned" className="datos" type="text" />

          <label htmlFor="weekday">Day of the week: </label>
          <input id="weekday" className="datos" type="text" />

        </div>

        <div id="thirdrow">
          
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

        </div>

        <div id="lastrow">

          

          <label htmlFor="addnote">Additional notes: </label>
          <input id="addnote" className="datos" type="text" />

        </div>



        <div id="buttons">
          <button type="reset" id="resbtn" onClick={handleClick}>Reset</button>
          <button type="submit" id="genbtn">Generate</button>
        </div>

      </form>


    </div>
  );
}

export default App;
