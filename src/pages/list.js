import { useState } from "react";
import FormL from "../Components/Form";
import Notes from "../Components/Notes";

export const  List = () =>{
   const [notes, setNotes] = useState([
   ])
   const createNote = (newNote) => {
        setNotes([...notes, newNote])

   }
    return(
    <div className="container">
        <FormL create={createNote}/>
        <hr/>
        <Notes notes={notes} setNotes={setNotes} />
    </div>
)};

