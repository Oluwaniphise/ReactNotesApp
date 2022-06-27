import React, { useState } from "react";
import NotesList from "./NotesList";

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
      setError('');
    }
    else{
      setError("Fields cannot be blank");
    }
  
  }

 
  return (

    <div className="container mb-3rem mx-auto">
      <h1 className="bg-slate-400 mx-auto text-center p-2 text-3xl">Your Daily Notes App</h1>
      {/* error text */}
      {error && (
        <h4 className="text-white rounded-xl w-[50%] mx-auto mt-4 p-3 bg-red-600 text-center">{error}</h4>
      )}

      <input type="text" className="flex  mx-auto mb-5 mt-5 p-2 rounded-xl w-[100%] bg-gray-200 border-solid 
      outline-none border-gray-200  " placeholder="Search"  />

      <div className="">
        <div className=" mx-3 md:mx-auto bg-gray-800 p-2 h-[200px] w-auto md:w-[350px] rounded-lg">
          <input type="text" value={title} autoFocus

            onChange={setTitleHandler}
            className="bg-gray-800 text-white border-none placeholder-white  focus:outline-none" placeholder="Title..." />
<br />
          <textarea type="text" rows="4" cols="30" value={input}

            onChange={setInputHandler}
            className="bg-gray-800 text-white  border-none placeholder-white resize-none focus:outline-none" placeholder="Type your notes..." ></textarea>
            <br />
          <button onClick={setNotesHandler} className="p-2 bg-yellow-400  mt-2  rounded-sm">Save Note</button>
        </div>


      <NotesList setNotes={setNotes} notes={notes}  />




      </div>
    </div>


  );
}

export default App;
