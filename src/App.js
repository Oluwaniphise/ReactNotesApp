import React, { useState } from "react";
import NotesList from "./NotesList";
import SearchText from "./SearchText";

function App() {
  const today  = new Date();
  const hh = today.getHours();
  const mm = today.getMinutes();
  const date = today.toLocaleDateString("en-UK");
  const time = hh + ":" + mm;
  
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState('');

  const setInputHandler = (e) => {
    setInput(e.target.value);
  }
  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  }

  const setNotesHandler = (e) => {
    e.preventDefault();
    if (input.trim().length > 0){
      setNotes([
        ...notes, { text: input, time:time,
          date:date, title: title, id: Math.random() * 10 }
      ]);
      setInput('');
      setTitle('');
      setError('');
    }
    else{
      setError("Fields cannot be blank");
    }
  
  }

 
  return (

    <div className="container mb-3rem mx-auto">
      <h1 className="bg-yellow-400 mx-auto text-center p-2 text-3xl">Your Daily Notes App</h1>
      {/* error text */}
      {error && (
        <h4 className="text-white rounded-xl w-[50%] mx-auto mt-4 p-3 bg-red-600 text-center">{error}</h4>
      )}
      
      <div className="flex mx-3 md:mx-auto mb-5 mt-5">
      <SearchText searchText={searchText} setSearchText={setSearchText} />

      </div>


      <div className="">
        <div className="mx-3 md:mx-auto bg-gray-800 p-2 h-[200px] w-auto md:w-[350px] rounded-lg">
          <input type="text" value={title} autoFocus

            onChange={setTitleHandler}
            className="bg-gray-800 text-white border-none placeholder-white  focus:outline-none" placeholder="Title..." />
<br />
          <textarea type="text" rows="4" cols="25" value={input}

            onChange={setInputHandler}
            className="bg-gray-800 text-white  border-none placeholder-white resize-none focus:outline-none" placeholder="Type your notes..." ></textarea>
            <br />
          <button onClick={setNotesHandler} className="p-2 bg-yellow-400 cursor-pointer  mt-2  rounded-sm">Save Note</button>
        </div>

<div className="grid my-4 grid-cols-1 gap-[2rem] mt-[3rem] md:grid-cols-3">
<NotesList setNotes={setNotes} 
      notes={notes.filter((note =>
        note.title.toLowerCase().includes(searchText)
  ))}  />

</div>




      </div>
    </div>


  );
}

export default App;
