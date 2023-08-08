import { useState } from "react";
import { Button } from "react-bootstrap";

function FormL({create}) {
  const [order,setOrder] = useState(1)
  const [note,setNote] = useState({text:'', order: order})
   function addNewNote (e){
      e.preventDefault()
      const newNote = {
        ...note, id:Date.now()
      }
      create(newNote)
      setOrder(order + 1)
      setNote({...note, text:'',order: order + 1})
    }

    return (
      <form>
        <div className="form-group">
            <input 
            type="text"
            className="form-control"
            placeholder="Введите заметку"
            value={note.text}
            onChange={e => setNote({...note, text:e.target.value})}
            />
          <Button className="btn btn-success"
            onClick={addNewNote}
          >Create note</Button>
        </div>
      </form>
    );
  }
  
  export default FormL;