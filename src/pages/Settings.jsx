import {useState, useEffect} from 'react' 
// useEffect allows us to automate actions so that we can syncronize with external systems (api requests, setTimeouts, webAPIs)
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_API_URL

function Settings(){
    const [GridNumber, setGridNumber] = useState('')
    const [status, setStatus] = useState('')
    const [description, setDescription]= useState('')

    useEffect(()=>{ //useEffect runs in 3 ways:
    //1. no dependandies(runs at every rerender)
    //2. empty dependancy array(runs only on Mount and when component is initialy rendered)
    //3. populated dependency array runs on mount and everytime speciifed dependicy changes

        const fecthDevice= async ()=>{
            try{
                const res = await axios.get(`${BASE_URL}/device`)
                if(res.data){
                    setGridNumber(res.data.GridNumber || '')
                    setStatus(res.data.status || '')
                    setDescription(res.data.description || '')
                }
            } catch (err){
                console.log(err)
            }
        }
        fecthDevice()
    }, [])

    const saveDevice = async ()=>{
        try{
            await axios.put(`${BASE_URL}/device`,{GridNumber, status, description})
            alert('Device info saved!')
        } catch (err){
            console.log(err)
        }
    }
    return (
    <div className='container mt-4'>
      <h1 className='text-primary fw-bold mb-4'>⚙️ Device Settings</h1>
      <div className='card p-4'>
        <div className='mb-3'>
          <label className='form-label fw-bold'>Grid Number</label>
          <input
            className='form-control'
            placeholder='Grid Number'
            value={GridNumber}
            onChange={e => setGridNumber(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label fw-bold'>Status</label>
          <input
            className='form-control'
            placeholder='Status'
            value={status}
            onChange={e => setStatus(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label fw-bold'>Description</label>
          <input
            className='form-control'
            placeholder='Description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' onClick={saveDevice}>Save Changes</button>
      </div>
    </div>
  )
}

export default Settings