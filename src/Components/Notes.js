import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Notes({notes,setNotes}) {
    const [curNote,setCurNote]= useState(null)
    function DragStart(e,note){
        setCurNote(note)
    }
    function DragEnd(e){
      e.target.style.background = "white"  
    }

    function DragOver(e){
        e.preventDefault()
        e.target.style.background = "lightgray"  
        
    }

    function Drop(e,note){
        e.preventDefault()
        setNotes(notes.map(c => {
            if (c.id === note.id){
                return {...c, order: curNote.order}
            }
            if (c.id === curNote.id) {
                return {...c, order: note.order}
            }
            return c
        }))
        e.target.style.background = "white"  
    }
    function sortNotes (a,b) {
        if (a.order > b.order) {
            return 1
        }
        else {
            return -1
        }
    }


    return (
        <ListGroup>
            {notes.sort(sortNotes).map((note) =>
                <ListGroup.Item
                className='note'
                draggable={true}
                onDragStart={e => DragStart(e,note)} 
                onDragEnd={e => DragEnd(e)}
                onDragLeave={e => DragEnd(e)}
                onDragOver={e => DragOver(e)}
                onDrop={e => Drop(e,note)}
                key={note.id}
                >
                {note.text}</ListGroup.Item>
            )}
        </ListGroup>
    );
  }
  
  export default Notes;