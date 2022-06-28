import React from "react";
import Note from "./Note";

const NotesList = ({setNotes, title, setTitle,  setInput, input, notes}) => {
  
    return ( 
        <>
        
        {notes.map(note => (
            
     <Note key={note.id} title={title} setTitle={setTitle} setInput={setInput} input={input}
     id={note.id} setNotes={setNotes} notes={notes} note={note}/>
          ))}
        </>

     );
}
 
export default NotesList;