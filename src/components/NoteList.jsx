import React from 'react'
import NoteShow from './NoteShow'

function NoteList({notes,onDelete}) {
  return (
    <div className='note-list'>
        {notes.map((note, index) => {
            return (
                <NoteShow key={index} note={note} onDelete={onDelete}/>
            )
        })}
    </div>
  )
}

export default NoteList