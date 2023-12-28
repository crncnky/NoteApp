import { useState } from 'react'
import './App.css'
import Note from './components/Note'
import NoteList from './components/NoteList'

function App() {
  const [notes, setNotes] = useState([])
  const noteCreate = (note) => {
    const createdNotes=[
      ...notes,{
        id:Math.round(Math.random()*999999),
        note,
      }
    ];
    setNotes(createdNotes);
}

  const deleteNoteById = (id) => {
    const afterDeletingNotes = notes.filter((note) => {
      return note.id !== id;
    })
    setNotes(afterDeletingNotes)
  }

  return (
    <>
    <h1>Cece's NotesApp</h1>
      <Note onCreate={noteCreate}/>
      <NoteList notes={notes} onDelete={deleteNoteById}/>
      
    </>
  )
}

export default App
