import React, {useState} from "react";
import EditNote from "./EditNote";
const Note = ({note, notes, setNotes, title, setTitle, input, setInput, id}) => {
    const deleteHandler = () =>{
        const newNotes = notes.filter(el => el.id !== id);
        setNotes(newNotes);
      }

    return ( 

                // <div className=" mt-3 ">
              <div key={note.id} className=" mx-3 px-[3rem] bg-yellow-400 p-2 w-auto h-auto xl:w-[350px] rounded-lg">
                <h3 className="text-black title text-2xl">{note.title}</h3>
                <p className="mb-4">{note.date} at {note.time}</p>
                <p className="text-black body mb-[1rem]">{note.text}</p>
  
                <div className=" flex gap-x-[1rem]">
                <i className="fa-solid fa-trash cursor-pointer bg-yellow-400"
                onClick={deleteHandler}></i>
                <span>
                  <EditNote title={title} setTitle={setTitle}
                   setInput={setInput} input={input}
                  note={note} id={id} setNotes={setNotes} />
                </span>
  
                </div>
              </div>
            // </div>
     
     );
}
 
export default Note;