import FormL from "../Components/Form";
import Notes from "../Components/Notes";

export const List = () =>{
    const notes = new Array(2).fill('')
    .map((_,i) =>({id: i, title: 'Note'}))
    return(
    <div className="container">
        <FormL />
        <hr/>
        <Notes notes={notes}/>
    </div>
)};

