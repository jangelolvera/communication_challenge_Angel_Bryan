import { render } from '@testing-library/react';
import React, { useState, useRef } from 'react';
import './App.css';
import formulario from './formulario.jpeg';
import html2canvas from 'html2canvas';

function App() {

  const [status, setStatus] = useState('');
  const [datos,setDatos] = useState({
    name_recipient: '',
    name_sender: '',
    relationship:'',
    evento:'',
    modifier:'',
    emotion:'',
    activity:'',
    additional_act:'',
    uactivity:'',
    day_week:'',
    month:'',
    day:'',
    year:'',
    start_time:'',
    Location_add:'',
    additional_notes:'',
  })

  const [readable, setReadable]= useState(false);

  const form = useRef();
  const preview = useRef();
  const containerRef= useRef();

  function handleSubmit(event) {

    event.preventDefault();

    let emptyVal;
    let cont = containerRef.current;

    if (cont) {
      cont.remove();
    }

    for (let i = 0; i < 16; i++) {
      setDatos({
        ...datos, 
        [event.target[i].name] : event.target[i].value //Esto asgina el valor de los input con los name
      })
      if (event.target[i].value === '') {

        emptyVal = true;

      }

    }

    if (emptyVal === true) {

      alert("Please, fill all the fields");

    } else {

      
    setReadable(true);
     

      setStatus('complete');
      console.log(datos);
      render(
        <div id="container" ref={containerRef}>

          <div id="disInfo" ref={form} style={{
            backgroundImage: `url(${formulario})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'

          }}>

            <input id="hidden0" className="hinput" type="text" readOnly="readonly" value={datos.name_recipient} />
            <input id="hidden1" className="hinput" type="text" readOnly="readonly" value={datos.name_sender} />
            <input id="hidden2" className="hinput" type="text" readOnly="readonly" value={datos.relationship} />
            <input id="hidden3" className="hinput" type="text" readOnly="readonly" value={datos.evento} />
            <input id="hidden4" className="hinput" type="text" readOnly="readonly" value={datos.modifier} />
            <input id="hidden5" className="hinput" type="text" readonly="readonly" value={datos.emotion} />
            <input id="hidden6" className="hinput" type="text" readOnly="readonly" value={datos.activity} />
            <input id="hidden7" className="hinput" type="text" readOnly="readonly" value={datos.additional_act} />
            <input id="hidden8" className="hinput" type="text" readOnly="readonly" value={datos.uactivity} />
            <input id="hidden9" className="hinput" type="text" readOnly="readonly" value={datos.day_week} />
            <input id="hidden10" className="hinput" type="text" readOnly="readonly" value={datos.month} />
            <input id="hidden11" className="hinput" type="text" readOnly="readonly" value={datos.day} />
            <input id="hidden12" className="hinput" type="text" readOnly="readonly" value={datos.year} />
            <input id="hidden13" className="hinput" type="text" readOnly="readonly" value={datos.start_time} />
            <input id="hidden14" className="hinput" type="text" readOnly="readonly" value={datos.Location_add} />
            <input id="hidden15" className="hinput" type="text" readOnly="readonly" value={datos.additional_notes} />

          </div>
        </div>
      );

    }

  }

  function handleChange(event){
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name] : event.target.value //relacionara los names
    })
  }

  function handleClick(event) {

    if (status === 'complete') {

      setStatus('');

      let cont = containerRef.current;

      setReadable(false);

      cont.remove();

    }
    else {
      alert("There is no content to reset");
    }

  }

  function giveRan(arr){
    return arr[Math.floor(Math.random()* arr.length)];
  }

  function genRandom(event) {

    setStatus('complete');

    let cont = containerRef.current;

    if (cont) {
      cont.remove();
    }

    const recNamesarr = ["Angel", "Bryan", "Luis", "Jimmy", "Karen", "Laura", "Emma", "José"];
    const sendNamesarr = ["Angel", "Bryan", "Luis", "Jimmy", "Karen", "Laura", "Emma", "José"];
    const relationsarr = ["Friend", "Son", "Exfriend", "Colleague", "Uncle", "Aunt", "Father", "Mother"];
    const eventNamesarr = ["Lolapalooza", "Corona Capital", "Viña del mar", "Hell & Heaven", "Superbowl", "Champions", "Hackaton", "E3"];
    const eventTypesarr = ["Musical", "Social", "Academic", "Recreative", "Sport", "Virtual", "Religious", "Charity"];
    const emotionsarr = ["Happy", "Grateful", "Honored", "Excited", "Really happy", "Really grateful", "Cheerful", "Thankful"];
    const activitiesarr = ["Dance", "Drink", "Debate", "Discuss", "Study", "Dinner", "Enjoy", "Party"];
    const secondActsarr = ["Dance", "Drink", "Debate", "Code", "Study", "Dinner", "Watch TV", "Party"];
    const unplannsarr = ["Stop", "Study", "Debate", "Discuss", "Study", "Leave", "Enjoy", "Talk"];
    const weekDaysarr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsarr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const daysarr = ["01", "11", "30", "31", "02", "20", "22", "14", "21", "12", "31", "08"];
    const yearsarr = ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028"];
    const timesarr = ["12:00", "13:00", "14:00", "10:00", "23:00", "20:00", "18:30", "04:20"];
    const adressesarr = ["Tula", "Pachuca", "My house", "Your house", "CDMX", "Monterrey", "Galerias", "Carls Jr."];
    const notesarr = ["Bring beverages", "Bring Chips", "Wear a suit", "Come with all your friends", "Please, arrive 20 minutes earlier", "Bring ice", "Get ready", "Please study"];

    setDatos({
      name_recipient:giveRan(recNamesarr),
      name_sender: giveRan (sendNamesarr),
      relationship: giveRan (relationsarr),
      evento: giveRan (eventNamesarr),
      modifier: giveRan (eventTypesarr),
      emotion: giveRan (emotionsarr),
      activity: giveRan (activitiesarr),
      additional_act: giveRan (secondActsarr),
      uactivity: giveRan (unplannsarr),
      day_week: giveRan (weekDaysarr),
      month: giveRan (monthsarr),
      day: giveRan (daysarr),
      year: giveRan (yearsarr),
      start_time: giveRan (timesarr),
      Location_add: giveRan (adressesarr),
      additional_notes: giveRan (notesarr),
    });
    

    render(

      <div id="container" ref={containerRef}>

        <div id="disInfo" ref={form} style={{
          backgroundImage: `url(${formulario})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>

          <input id="hidden0" className="hinput" type="text" readOnly="readonly" value={datos.name_recipient} />
          <input id="hidden1" className="hinput" type="text" readOnly="readonly" value={datos.name_sender} />
          <input id="hidden2" className="hinput" type="text" readOnly="readonly" value={datos.relationship} />
          <input id="hidden3" className="hinput" type="text" readOnly="readonly" value={datos.evento} />
          <input id="hidden4" className="hinput" type="text" readOnly="readonly" value={datos.modifier} />
          <input id="hidden5" className="hinput" type="text" readOnly="readonly" value={datos.emotion} />
          <input id="hidden6" className="hinput" type="text" readOnly="readonly" value={datos.activity} />
          <input id="hidden7" className="hinput" type="text" readOnly="readonly" value={datos.additional_act} />
          <input id="hidden8" className="hinput" type="text" readOnly="readonly" value={datos.uactivity} />
          <input id="hidden9" className="hinput" type="text" readOnly="readonly" value={datos.day_week}/>
          <input id="hidden10" className="hinput" type="text" readOnly="readonly" value={datos.month} />
          <input id="hidden11" className="hinput" type="text" readOnly="readonly" value={datos.day} />
          <input id="hidden12" className="hinput" type="text" readOnly="readonly" value={datos.year} />
          <input id="hidden13" className="hinput" type="text" readOnly="readonly" value={datos.start_time} />
          <input id="hidden14" className="hinput" type="text" readOnly="readonly" value={datos.Location_add} />
          <input id="hidden15" className="hinput" type="text" readOnly="readonly" value={datos.additional_notes} />

        </div>
      </div>
    );

  }

  function getPreview() {
    if (status==='complete') {
      window.scrollTo(0, 0); // <-- this fixes the issue
      html2canvas(form.current).then(canvas => {
        preview.current.setAttribute('href', canvas.toDataURL());
        preview.current.setAttribute('download', Date.now().toString()); //nombbre del descargable
        preview.current.click();
      });
    }else{
      alert("You haven't generated an invitation!");
    }

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
          <input id="recipient" className="datos" type="text" placeholder="Who are you inviting?" name="name_recipient" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="sender">Name of sender: </label>
          <input id="sender" className="datos" type="text" placeholder="Who's writting" name="name_sender" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="relationship">Relation: </label>
          <input id="relationship" className="datos" type="text" placeholder="(eg. Friend, Dad, colleague...)" name="relationship" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="yourevent">Event name: </label>
          <input id="yourevent" className="datos" type="text" placeholder="Name of the event" name="evento" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="modifier">Event type: </label>
          <input id="modifier" className="datos" type="text" placeholder="(eg. Academic, social...)" name="modifier" onChange={handleChange} readOnly={readable}/>

        </div>

        <div id="secondrow">

          <label htmlFor="emotion">Emotion: </label>
          <input id="emotion" className="datos" type="text" placeholder="(eg. happy, grateful...)" name="emotion" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="activity">Activity: </label>
          <input id="activity" className="datos" type="text" placeholder="(eg. study, eat...)" name="activity" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="secondact">Second activity: </label>
          <input id="secondact" className="datos" type="text" placeholder="(eg. study, eat...)" name="additional_act" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="unplanned">Unplanned activity: </label>
          <input id="unplanned" className="datos" type="text" placeholder="(eg. study, eat...)" name="uactivity" onChange={handleChange} readOnly={readable} />

          <label htmlFor="weekday">Day of the week: </label>
          <input id="weekday" className="datos" type="text" placeholder="(eg. friday, monday...)" name="day_week" onChange={handleChange} readOnly={readable}/>

        </div>

        <div id="thirdrow">

          <label htmlFor="month">Month: </label>
          <input id="month" className="datos" type="text" placeholder="(eg. Jan, Feb, Mar...)" name="month" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="day">Day: </label>
          <input id="day" className="datos" type="text" placeholder="(eg. 01, 02, 10...)" name="day" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="year">Year: </label>
          <input id="year" className="datos" type="text" placeholder="(eg. 2021, 2022...)" name="year" onChange={handleChange} readOnly={readable} />

          <label htmlFor="time">Start time: </label>
          <input id="time" className="datos" type="text" placeholder="(eg. 12:00, 06:00...)" name="start_time" onChange={handleChange} readOnly={readable}/>

          <label htmlFor="location">Location/ Address: </label>
          <input id="location" className="datos" type="text" placeholder="(eg. My house, school....)" name="Location_add" onChange={handleChange} readOnly={readable} />

        </div>

        <div id="lastrow">

          <label htmlFor="addnote">Additional notes: </label>
          <input id="addnote" className="datos" type="text" placeholder="Additional advice" name="additional_notes" onChange={handleChange} readOnly={readable}/>

        </div>

        <div id="buttons">

          <button type="reset" id="resbtn" onClick={handleClick}>Reset</button>
          <button type="submit" id="genbtn">Generate</button>
          <button type="button" id="random" onClick={genRandom}>Randomize</button>
          <button type="button" id="printbtn" onClick={getPreview}>Print</button>

        </div>


      </form>

      <a id="preview" ref={preview} href="www.google.com" disable />

    </div>
  );
}

export default App;
