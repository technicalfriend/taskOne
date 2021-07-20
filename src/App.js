import React, {useState} from 'react';

  //find minimum of two integers
  function min(x, y) {
	  return (x < y)? x: y;	
  }

  function calcAngle(h, m) {
    // validate the input
    if (h <0 || m < 0 || h >12 || m > 60)
      alert("Wrong input");

    if (h === 12) h = 0;
    if (m === 60)
    {
    m = 0;
    h += 1;
    if(h>12)
      h = h-12;
    }

    // with reference to 12:00
    let hour_angle = 0.5 * (h * 60 + m);
    let minute_angle = 6 * m;

    // Find the difference between two angles
    let angle = Math.abs(hour_angle - minute_angle);

    // Return the smaller angle of two possible angles
    angle = min(360 - angle, angle);

    alert(angle);
  }


const App = () => {

  const [hour, setHour] = useState(0);
  const [minut, setMinut] = useState(0);

  const handleHourChange = (e) => setHour(
     e.currentTarget.value
  )

  const handleMinutChange = (e) => setMinut(  
    e.currentTarget.value
  )

  return (
    <form>
      <div>        
        <label>Hour : </label>
        <input type="number" name="hour" onChange={handleHourChange} max="12" min="1" defaultValue={hour} />
      </div>
      <div>
        <label>Minut : </label>
        <input type="number" name="minut" onChange={handleMinutChange} max="60" min="0" defaultValue={minut} />
      </div>
      <input type="button" onClick={(e)=>calcAngle(parseInt(hour),parseInt(minut))} value="Get Degrees" />
    </form>
  )
}


export default App;
