import Note from "./Note";

const NotesList = ({setNotes, notes}) => {
    return ( 
        <div className="px-4 grid grid-cols-1 gap-[2rem] mt-4 xl:grid-cols-3">

        {notes.map(note => (
            
     <Note setNotes={setNotes} notes={notes} note={note}/>
          ))}
        </div>

     );
}
 
export default NotesList;