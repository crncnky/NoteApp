import React, { useState } from 'react'
import { Box } from '@mui/material';


function Note({onCreate}) {
    const [note, setNote] = useState('')
    const handleChange = (event) => {
        setNote(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(note)
        setNote('')
    }

  return (
    <>
        <Box>
        <textarea value={note} onChange={handleChange} className="textarea" rows="4" cols="50" placeholder='Enter your note here...'/>

        <br></br>
      
        <div>
        <button className='add'onClick={handleSubmit}>Add</button>
        </div>
        </Box>
    </>
  )
}

export default Note