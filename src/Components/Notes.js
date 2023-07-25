import ListGroup from 'react-bootstrap/ListGroup';

function Notes({notes}) {
    return (
        <ListGroup>
            {notes.map(note =>(
                <ListGroup.Item key={note.id}>
                    {note.title}</ListGroup.Item>
            ))}
        </ListGroup>
    );
  }
  
  export default Notes;