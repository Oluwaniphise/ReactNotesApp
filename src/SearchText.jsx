import React from "react";
const SearchText = ({setSearchText, SearchText}) => {

    return (
    
    <input value={SearchText} onChange={(e) => setSearchText(e.target.value.toLocaleLowerCase())} type="text" className=" p-2 rounded-xl  bg-gray-200 border-solid 
      outline-none border-gray-200" placeholder="Search by title"  />
        
     );
}
 
export default SearchText;