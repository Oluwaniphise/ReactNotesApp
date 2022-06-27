const Note = ({note, notes, setNotes, id}) => {
    const deleteHandler = () =>{
        const newNotes = notes.filter(el => el.id !== id);
        setNotes(newNotes);
      }
    
    return ( 

                // <div className=" mt-3 ">
              <div key={note.id} className="mx-3 px-[3rem] relative bg-gray-200 p-2 w-auto h-auto md:w-[350px] rounded-lg">
                <h3 className="text-black  text-2xl">{note.title}</h3>
                <p className="mb-4">{note.date} at {note.time}</p>
                <p className="text-black mb-[1rem]">{note.text}</p>
  
                <div className="absolute bottom-1 right-2">
                <i className="fa-solid cursor-pointer text-red-400 fa-trash"
                onClick={deleteHandler}></i>
  
                </div>
              </div>
            // </div>
     
     );
}
 
export default Note;