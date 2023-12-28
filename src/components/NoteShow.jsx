import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function NoteShow({note, onDelete}) {

    const handleDeleteClick = () => {
        onDelete(note.id)
    }
  return (
    <div className='noteCard'>
        <h3>Your Note;</h3>
        <p>{note.note}</p>
        <div>
            <DeleteIcon onClick={handleDeleteClick}/>
        </div>
    </div>
  )
}

export default NoteShow