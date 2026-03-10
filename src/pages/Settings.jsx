import {useState, useEffect} from 'react'
import axios from 'axios'

function Settings(){
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription]= useState('')

    useEffect(()=>{
        const fecthDevice= async ()=>{
            try{
                const res = await axios.get('http://localhost:5000/api/device')
                if(res.data){
                    setNmae(res.data.name || '')
                    setLocation(res.data.location || '')
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
            await axios.put('http://localhost:5000/api/device',{name, location, description})
            alert('Device info saved!')
        } catch (err){
            console.log(err)
        }
    }
    return (
        <div>
      <h1>Device Settings</h1>
      <input
        placeholder='Device Name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder='Location'
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <input
        placeholder='Description'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button onClick={saveDevice}>Save Changes</button>
    </div>
    )
}

export default Settings