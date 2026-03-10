import { useState, useEffect} from 'react'
import axios from 'axios'

function Notes(){
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [editId, setEditId] = useState(null)

    useEffect(()=>{
        const fetchNotes= async () =>{
 try{
    const res = await axios.get('http://localhost:5000/api/notes')
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
            const res= await axios.put (`http://localhost:5000/api/notes/${editId}`, { title, text })
            setNotes(notes.map(n=> n._id===editId? res.data: n))
            setEditId(null)
        } else{
            const res = await axios.post('http://localhost:5000/api/notes', {title, text})
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
        await axios.delete(`http://localhost:5000/api/notes/${id}`)
        setNotes(notes.filter(n=> n._id !== id))
    } catch (err){
        console.log(err)
    }
}

return (
    <div>
      <h1>Notes</h1>
      <input
        placeholder='Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        placeholder='Text'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={saveNote}>{editId ? 'Update' : 'Add Note'}</button>

      {notes.map(n => (
        <div key={n._id}>
          <h3>{n.title}</h3>
          <p>{n.text}</p>
          <button onClick={() => editNote(n)}>Edit</button>
          <button onClick={() => deleteNote(n._id)}>Delete</button>
        </div>
      ))}
    </div>
)
}

export default Notes