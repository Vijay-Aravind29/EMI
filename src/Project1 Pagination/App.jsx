import React, {useState} from 'react';
import data from "./Hooks/Project1 Pagination/data.json"

const App = () => {

  const recordsPerPage =10;
  const [currentPage,setCurrentPage]=useState(1);
  const totalPages=Math.ceil(data.length/recordsPerPage)

  function getRecords(){
    const firstIndex=(currentPage-1)* recordsPerPage;
    const lastIndex = firstIndex + recordsPerPage;

    return data.slice(firstIndex,lastIndex);
  }
    function handlePrev(){
      setCurrentPage(currentPage-1)
    }

    function handleNext(){
      setCurrentPage(currentPage+1)
    }
    
  return (

    <div>

      {getRecords().map((value,index)=>{
        return(
          <div>
            <span>{value.id}</span>
            <span>{value.name}</span>
          </div>
        )
      })}
      <button disabled={currentPage===1} onClick={handlePrev}>Prev</button>
      <span>{currentPage}/{totalPages}</span>
      <button disabled={currentPage===totalPages} onClick={handleNext}  > Next</button>
    </div>
  )
}

export default App