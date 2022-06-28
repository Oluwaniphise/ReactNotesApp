import React, {useState} from "react";

const EditNote = ({note, notes, title, setTitle, setInput, input, setNotes, id}) => {

  const today  = new Date();
  const hh = today.getHours();
  const mm = today.getMinutes();
  const date = today.toLocaleDateString("en-UK");
  const time = hh + ":" + mm;

const [openBtn, setOpenBtn] = useState(false);
  const openEditNoteHandler = () =>{
    setOpenBtn(!openBtn);
  }

  const editNoteHandler = () =>{
    setNotes([
        {title:note.title, date:date, time:time, text:note.text, id:Math.random()*10, }
    ])
    setOpenBtn(false)
  }
    return ( 
        <>
        {openBtn && (
             <div className="  bg-yellow-400 opacity-75 open-btn">
  
             <div className="p-[1rem] justify-center items-center ">

                <input type="text" onChange={(e) => setTitle(e.target.value)}  value={note.title}  />
          <br /> <br />
                <textarea name="" id="" cols="30" rows="10" value={input} onChange={(e) => setInput(e.target.value)} ></textarea>
                <br /> <br />
                <button className="bg-yellow-400 p-2" onClick={editNoteHandler}>Save</button>


            
            
                                {/* close modal */}
                                <button className=' bg-[#004D93] text-center my-[3rem] rounded py-3 px-[2.5%] text-white'  onClick={openEditNoteHandler}>Close Modal</button>
            
            </div>
                 </div>
        )}

        <div>
            <i onClick={openEditNoteHandler} className="fa-solid cursor-pointer fa-edit"></i>
            </div>
        </>

     );
}
 
export default EditNote;