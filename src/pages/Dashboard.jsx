import {useState, useEffect} from 'react'
import axios from 'axios'

function Dashboard(){
    const [readings, setReadings] = useState([])
useEffect(() => {  //useEffect(hook) is a side effect which runs after the component renders
  const fetchReadings = async () => {
    try {
      const res = await axios.get('https://smart-grid-dashboard-9bfs.onrender.com/api/readings')
      setReadings(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  fetchReadings()

  const interval = setInterval(fetchReadings, 1000)  //automatically refreshes readings after 1 sec
    return () => clearInterval(interval)

}, [])   //[] this is dependency array and since its empty that means react runs the effect only once

const latest = readings[readings.length - 1] //used -1 to get the last item/reading in from the readings array


return (
    <div className='container mt-4'>
      <h1 className='text-primary fw-bold mb-4'>⚡ Solar Grid Dashboard</h1>
      {latest ? (   //latest is an object contain(voltage,current,power)
        <div className='row'>
          <div className='col-md-4'>
            <div className='card text-white bg-primary mb-3'>
              <div className='card-body'>
                <h5 className='card-title'>Voltage</h5>
                <p className='card-text fs-2 fw-bold'>{latest.voltage} V</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card text-white bg-success mb-3'>
              <div className='card-body'>
                <h5 className='card-title'>Current</h5>
                <p className='card-text fs-2 fw-bold'>{latest.current} A</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card text-white bg-danger mb-3'>
              <div className='card-body'>
                <h5 className='card-title'>Power</h5>
                <p className='card-text fs-2 fw-bold'>{latest.power} W</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading readings...</p>
      )}
    </div>
  )
}

  export default Dashboard 