import { render } from '@testing-library/react';
import React, { useState, useRef } from 'react';
import './App.css';
import formulario from './formulario.jpeg';

function App() {

  const [status, setStatus] = useState('');

  function handleSubmit(event) {

    event.preventDefault();

    let emptyVal;
    let cont = document.getElementById('container');

    if (cont) {
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

      for (let i = 0; i < 16; i++) {
        event.target[i].readOnly = true;
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

            <input id="hidden0" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[0].value} />
            <input id="hidden1" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[1].value} />
            <input id="hidden2" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[2].value} />
            <input id="hidden3" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[3].value} />
            <input id="hidden4" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[4].value} />
            <input id="hidden5" className="hinput" type="text" readonly="readonly" defaultValue={event.target[5].value} />
            <input id="hidden6" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[6].value} />
            <input id="hidden7" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[7].value} />
            <input id="hidden8" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[8].value} />
            <input id="hidden9" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[9].value} />
            <input id="hidden10" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[10].value} />
            <input id="hidden11" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[11].value} />
            <input id="hidden12" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[12].value} />
            <input id="hidden13" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[13].value} />
            <input id="hidden14" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[14].value} />
            <input id="hidden15" className="hinput" type="text" readOnly="readonly" defaultValue={event.target[15].value} />

          </div>
        </div>
      );

    }

  }

  function handleClick(event) {

    if (status === 'complete') {

      setStatus('');

      let writeAgain = document.querySelectorAll(".datos");
      let cont = document.getElementById('container');


      for (let i = 0; i < 16; i++) {
        writeAgain[i].readOnly = false;
      }

      cont.remove();


    }
    else {
      alert("No hay contenido para resetear");
    }

  }

  function genRandom(event) {

    setStatus('complete');

    let cont = document.getElementById('container');

    if (cont) {
      cont.remove();
    }

    const recNames = ["Angel", "Bryan", "Luis", "Jimmy", "Karen", "Laura", "Emma", "José"];
    const sendNames = ["Angel", "Bryan", "Luis", "Jimmy", "Karen", "Laura", "Emma", "José"];
    const relations = ["Friend", "Son", "Exfriend", "Colleague", "Uncle", "Aunt", "Father", "Mother"];
    const eventNames = ["Lolapalooza", "Corona Capital", "Viña del mar", "Hell & Heaven", "Superbowl", "Champions", "Hackaton", "E3"];
    const eventTypes = ["Musical", "Social", "Academic", "Recreative", "Sport", "Virtual", "Religious", "Charity"];
    const emotions = ["Happy", "Grateful", "Honored", "Excited", "Really happy", "Really grateful", "Cheerful", "Thankful"];
    const activities = ["Dance", "Drink", "Debate", "Discuss", "Study", "Dinner", "Enjoy", "Party"];
    const secondActs = ["Dance", "Drink", "Debate", "Code", "Study", "Dinner", "Watch TV", "Party"];
    const unplanns = ["Stop", "Study", "Debate", "Discuss", "Study", "Leave", "Enjoy", "Talk"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["01", "11", "30", "31", "02", "20", "22", "14", "21", "12", "31", "08"];
    const years = ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"];
    const times = ["12:00", "13:00", "14:00", "10:00", "23:00", "20:00", "18:30", "04:20"];
    const adresses = ["Tula", "Pachuca", "My house", "Your house", "CDMX", "Monterrey", "Galerias", "Carls Jr."];
    const notes = ["Bring beverages", "Bring Chips", "Wear a suit", "Come with all your friends", "Please, arrive 20 minutes earlier", "Bring ice", "Get ready", "Please study"];

    let ranName = recNames[Math.floor(Math.random() * recNames.length)];
    let ranSenName = sendNames[Math.floor(Math.random() * sendNames.length)];
    let ranRel = relations[Math.floor(Math.random() * relations.length)];
    let ranEvname = eventNames[Math.floor(Math.random() * eventNames.length)];
    let ranTypes = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    let ranEmo = emotions[Math.floor(Math.random() * emotions.length)];
    let ranAct = activities[Math.floor(Math.random() * activities.length)];
    let ranSecAct = secondActs[Math.floor(Math.random() * secondActs.length)];
    let ranUnp = unplanns[Math.floor(Math.random() * unplanns.length)];
    let ranWeek = weekDays[Math.floor(Math.random() * weekDays.length)];
    let ranMonth = months[Math.floor(Math.random() * months.length)];
    let ranDay = days[Math.floor(Math.random() * days.length)];
    let ranYear = years[Math.floor(Math.random() * years.length)];
    let ranTime = times[Math.floor(Math.random() * times.length)];
    let ranAddr = adresses[Math.floor(Math.random() * adresses.length)];
    let ranNote = notes[Math.floor(Math.random() * notes.length)];

    render(

      <div id="container">

        <div id="disInfo" style={{
          backgroundImage: `url(${formulario})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>

          <input id="hidden0" className="hinput" type="text" readOnly="readonly" defaultValue={ranName} />
          <input id="hidden1" className="hinput" type="text" readOnly="readonly" defaultValue={ranSenName} />
          <input id="hidden2" className="hinput" type="text" readOnly="readonly" defaultValue={ranRel} />
          <input id="hidden3" className="hinput" type="text" readOnly="readonly" defaultValue={ranEvname} />
          <input id="hidden4" className="hinput" type="text" readOnly="readonly" defaultValue={ranTypes} />
          <input id="hidden5" className="hinput" type="text" readOnly="readonly" defaultValue={ranEmo} />
          <input id="hidden6" className="hinput" type="text" readOnly="readonly" defaultValue={ranAct} />
          <input id="hidden7" className="hinput" type="text" readOnly="readonly" defaultValue={ranSecAct} />
          <input id="hidden8" className="hinput" type="text" readOnly="readonly" defaultValue={ranUnp} />
          <input id="hidden9" className="hinput" type="text" readOnly="readonly" defaultValue={ranWeek} />
          <input id="hidden10" className="hinput" type="text" readOnly="readonly" defaultValue={ranMonth} />
          <input id="hidden11" className="hinput" type="text" readOnly="readonly" defaultValue={ranDay} />
          <input id="hidden12" className="hinput" type="text" readOnly="readonly" defaultValue={ranYear} />
          <input id="hidden13" className="hinput" type="text" readOnly="readonly" defaultValue={ranTime} />
          <input id="hidden14" className="hinput" type="text" readOnly="readonly" defaultValue={ranAddr} />
          <input id="hidden15" className="hinput" type="text" readOnly="readonly" defaultValue={ranNote} />

        </div>
      </div>
    );

  }

  return (
    <div className="App">
      <div class="header">
        <h2>Fill in the blanks</h2>
      </div>

      <form
        id="blanks"
        onSubmit={handleSubmit}
        value={status}
      >
        <div id="firstrow">

          <label htmlFor="recipient">Name of recipient: </label>
          <input id="recipient" className="datos" type="text" placeholder="Who are you inviting?"/>

          <label htmlFor="sender">Name of sender: </label>
          <input id="sender" className="datos" type="text" placeholder="Who's writting"/>

          <label htmlFor="relationship">Relationship: </label>
          <input id="relationship" className="datos" type="text" placeholder="(eg. Friend, Dad, colleague...)"/>

          <label htmlFor="yourevent">Event: </label>
          <input id="yourevent" className="datos" type="text" placeholder="Name of the event"/>

          <label htmlFor="modifier">Modifier: </label>
          <input id="modifier" className="datos" type="text" placeholder="(eg. Academic, social...)"/>

        </div>

        <div id="secondrow">

          <label htmlFor="emotion">Emotion: </label>
          <input id="emotion" className="datos" type="text" placeholder="(eg. happy, grateful...)"/>

          <label htmlFor="activity">Activity: </label>
          <input id="activity" className="datos" type="text" placeholder="(eg. study, eat...)"/>

          <label htmlFor="secondact">Second activity: </label>
          <input id="secondact" className="datos" type="text" placeholder="(eg. study, eat...)"/>

          <label htmlFor="unplanned">Unplanned activity: </label>
          <input id="unplanned" className="datos" type="text" placeholder="(eg. study, eat...)"/>

          <label htmlFor="weekday">Day of the week: </label>
          <input id="weekday" className="datos" type="text" placeholder="(eg. friday, monday...)"/>

        </div>

        <div id="thirdrow">

          <label htmlFor="month">Month: </label>
          <input id="month" className="datos" type="text" placeholder="(eg. Jan, Feb, Mar...)"/>

          <label htmlFor="day">Day: </label>
          <input id="day" className="datos" type="text" placeholder="(eg. 01, 02, 10...)"/>

          <label htmlFor="year">Year: </label>
          <input id="year" className="datos" type="text" placeholder="(eg. 2021, 2022...)"/>

          <label htmlFor="time">Start time: </label>
          <input id="time" className="datos" type="text" placeholder="(eg. 12:00, 06:00...)"/>

          <label htmlFor="location">Location/ Address: </label>
          <input id="location" className="datos" type="text" placeholder="(eg. My house, school....)"/>

        </div>

        <div id="lastrow">

          <label htmlFor="addnote">Additional notes: </label>
          <input id="addnote" className="datos" type="text" placeholder="Additional advice"/>

        </div>

        <div id="buttons">

          <button type="reset" id="resbtn" onClick={handleClick}>Reset</button>
          <button type="submit" id="genbtn">Generate</button>
          <button type="button" id="random" onClick={genRandom}>Randomize</button>

        </div>

      </form>

    </div>
  );
}

export default App;
