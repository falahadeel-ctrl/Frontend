import { useState, useEffect} from 'react'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_API_URL

function Notes(){
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [editId, setEditId] = useState(null)

    useEffect(()=>{
        const fetchNotes= async () =>{
 try{
    const res = await axios.get(`${BASE_URL}/notes`)
    setNotes(res.data)
 } catch (err){
    console.log(err)
 }
    } 
    fetchNotes()
}, [])

const saveNote = async ()=>{
    try{
        if(editId){
            const res= await axios.put (`${BASE_URL}/notes/${editId}`, { title, text })
            setNotes(notes.map(n=> n._id===editId? res.data: n))
            setEditId(null)
        } else{
            const res = await axios.post(`${BASE_URL}/notes`, {title, text})
            setNotes([...notes, res.data])
        }
        setTitle('')
        setText('')
    } catch (err){
        console.log(err)
    }
}

const editNote = (note)=>{
    setEditId(note._id)
    setTitle(note.title)
    setText(note.text)
}

const deleteNote = async (id)=> {
    try {
        await axios.delete(`${BASE_URL}/notes/${id}`)
        setNotes(notes.filter(n=> n._id !== id))
    } catch (err){
        console.log(err)
    }
}

return (
    <div className='container mt-4'>
      <h1 className='text-primary fw-bold mb-4'>📝 Notes</h1>
      <div className='card p-3 mb-4'>
        <input
          className='form-control mb-2'
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className='form-control mb-2'
          placeholder='Text'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='btn btn-primary' onClick={saveNote}>
          {editId ? 'Update Note' : 'Add Note'}
        </button>
      </div>

      {notes.map(n => (
        <div key={n._id} className='card p-3 mb-2'>
          <h5 className='text-primary'>{n.title}</h5>
          <p>{n.text}</p>
          <div className='d-flex gap-2'>
            <button className='btn btn-warning btn-sm' onClick={() => editNote(n)}>Edit</button>
            <button className='btn btn-danger btn-sm' onClick={() => deleteNote(n._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Notes