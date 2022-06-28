import React from "react";
const Note = ({note, notes, setNotes, id}) => {
    const deleteHandler = () =>{
        const newNotes = notes.filter(el => el.id !== id);
        setNotes(newNotes);
      }
    
    return ( 

                // <div className=" mt-3 ">
              <div key={note.id} className="relative mx-3 px-[3rem] bg-yellow-400 p-2 w-auto h-auto md:w-[350px] rounded-lg">
                <h3 className="text-black text-2xl">{note.title}</h3>
                <p className="mb-4">{note.date} at {note.time}</p>
                <p className="text-black mb-[1rem]">{note.text}</p>
  
                <div className="absolute">
                <i className="fa-solid fa-trash cursor-pointer bg-yellow-400 "
                onClick={deleteHandler}></i>
  
                </div>
              </div>
            // </div>
     
     );
}
 
export default Note;