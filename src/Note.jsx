const Note = ({note, notes, setNotes}) => {
    const deleteHandler = () =>{
        const newNotes = notes.filter(el => el.id !== note.id);
        setNotes(newNotes);
      }
    
    return ( 

                <div className="mx-auto mt-4 px-2">
              <div key={note.id} className="relative bg-gray-200 p-2 w-[400px] h-auto xl:w-[350px] rounded-lg">
                <h3 className="text-black  text-2xl">{note.title}</h3>
                <p className="mb-4">{note.date} at {note.time}</p>
                <p className="text-black mb-[1rem]">{note.text}</p>
  
                <div className="absolute bottom-1 right-2">
                <i class="fa-solid cursor-pointer text-red-400 fa-trash"
                onClick={deleteHandler}></i>
  
                </div>
              </div>
            </div>
     
     );
}
 
export default Note;