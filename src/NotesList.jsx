import Note from "./Note";

const NotesList = ({setNotes, notes}) => {
    return ( 
        <>
        
        {notes.map(note => (
            
     <Note key={note.id} id={note.id} setNotes={setNotes} notes={notes} note={note}/>
          ))}
        </>

     );
}
 
export default NotesList;