// import React,{useState} from 'react'

// const App = () => {
//     const Birthday =[{name:"Vijay"},{name:"Aravind"}]
//     const [data,setData]=useState(Birthday);
//   return (
//     <div>
//         <h1>Today {data.length}Members Birthday</h1>
//         {data.map((item,index)=>{
//             return(
//                 <div>
//                     <p>{item.name}</p>
//                 </div>
//             )
//         })}
//         <button onClick={()=> setData([])}>Clear</button>
//     </div>
//   )
// }
//export default App
import React, { useState } from 'react';
import './App.css';



const Birthday = () => {
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: 'Tamil', age: 10, img:"https://cdn.pixabay.com/photo/2025/03/03/13/49/little-girl-9444205_640.jpg"},
    { id: 3, name: 'Hester Hogan', age: 8, img:"https://cdn.pixabay.com/photo/2020/12/18/15/23/laugh-5842341_640.jpg"},
    { id: 3, name: 'Larry Little', age: 5, img: "https://cdn.pixabay.com/photo/2022/12/23/17/38/child-7674739_640.jpg" },
    { id: 4, name: 'Sean Walsh', age: 6, img: "https://cdn.pixabay.com/photo/2016/06/16/15/06/child-1461455_640.jpg"},
    { id: 5, name: 'Lola Gardner', age: 4, img:"https://cdn.pixabay.com/photo/2014/04/23/14/47/boy-330582_640.jpg"  },
    { id: 6, name: 'Sudesh Gowda', age: 29, img:"data:image/jpeg;base64,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" }
  
  ]);

  const clearAll = () => {
    setBirthdays([]);
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <h3 className='heading'>{birthdays.length} Birthdays today</h3>
        <div>
          {birthdays.map((person) => (
            <div key={person.id} className='card'>
              <img src={person.img} alt={person.name}  />
              <div>
                <h4 className='name'>{person.name}</h4>
                <p className='age'>{person.age} years</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={clearAll} className='button'>Clear All</button>
      </div>
    </div>
  );
};

export default Birthday;