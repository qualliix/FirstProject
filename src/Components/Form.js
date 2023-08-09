import { useContext, useState } from "react";
import { AlertContext } from "../Context/alert/alertContext";


function FormL({create}) {
  const [order,setOrder] = useState(1)
  const alert = useContext(AlertContext)
  const [note,setNote] = useState({text:'', order: order})
   function addNewNote (e){
    e.preventDefault()
    if (note.text.trim()){
      const newNote = {
        ...note, id:Date.now()
      }
      create(newNote)
      setOrder(order + 1)
      setNote({...note, text:'',order: order + 1})
      alert.show('Note has been created!')
      
    }
    else {
      alert.show('Please, enter note text!')
    }}
    return (
      <form onSubmit={addNewNote}>
        <div className="form-group">
            <input 
            type="text"
            className="form-control"
            placeholder="Введите заметку"
            value={note.text}
            onChange={e => setNote({...note, text:e.target.value})}
            />
        </div>
      </form>
    );
  }
  
  export default FormL;