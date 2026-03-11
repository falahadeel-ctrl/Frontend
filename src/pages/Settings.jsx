import {useState, useEffect} from 'react' 
// useEffect allows us to automate actions so that we can syncronize with external systems (api requests, setTimeouts, webAPIs)
import axios from 'axios'

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
                const res = await axios.get('http://localhost:5000/api/device')
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
            await axios.put('http://localhost:5000/api/device',{GridNumber, status, description})
            alert('Device info saved!')
        } catch (err){
            console.log(err)
        }
    }
    return (
        <div>
      <h1>Device Settings</h1>
      <input
        placeholder='GridNumber'
        value={GridNumber}
        onChange={e => setGridNumber(e.target.value)}
      />
      <input
        placeholder='Status'
        value={status}
        onChange={e => setStatus(e.target.value)}
      />
      <input
        placeholder='description'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={saveDevice}>Save Changes</button>
    </div>
    )
}

export default Settings