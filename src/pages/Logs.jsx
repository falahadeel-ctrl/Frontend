import {useState, useEffect} from 'react'
import axios from 'axios'

function Logs(){
    const [readings, setReadings] = useState([])

    useEffect(()=>{
        const fetchLogs = async ()=> {
            try {
                const res = await axios.get('http://localhost:5000/api/readings')
                setReadings(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fetchLogs()
    },[])

    const deleteReading = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/api/readings/${id}`)
            setReadings(readings.filter(r=>r._id !==id))
        } catch (err){  
            console.log(err)
            }
        }

        return ( <div>
      <h1>History Logs</h1>
      <table>
        <thead>
          <tr>
            <th>Voltage</th>
            <th>Current</th>
            <th>Power</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {readings.map(r => (
            <tr key={r._id}>
              <td>{r.voltage} V</td>
              <td>{r.current} A</td>
              <td>{r.power} W</td>
              <td>{new Date(r.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => deleteReading(r._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
    }

    export default Logs