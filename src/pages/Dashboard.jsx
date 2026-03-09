import {useState, useEffect} from 'react'
import axios from 'axios'

function Dashboard(){
    const [readings, setReadings] = useState([])
useEffect(() => {  //useEffect(hook) is a side effect which runs after the component renders
  const fetchReadings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/readings')
      setReadings(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  fetchReadings()
}, [])   //[] this is dependency array and since its empty that means react runs the effect only once

const latest = readings[readings.length - 1] //used -1 to get the last item/reading in from the readings array

return (
    <div>
      <h1>Solar Grid Dashboard</h1>
      {latest ? (   //latest is an object contain(voltage,current,power)
        <div>
          <p>Voltage: {latest.voltage} V</p>
          <p>Current: {latest.current} A</p>
          <p>Power: {latest.power} W</p>
        </div>
      ) : (
        <p>Loading readings...</p>
      )}
    </div>
  )
}

  export default Dashboard 