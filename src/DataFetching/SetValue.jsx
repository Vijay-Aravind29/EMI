import React ,{useState} from 'react'

const App = () => {
  const [value,setValue]=useState("");
  
  return (
    <div>
      <input onChange={(e)=>setValue(e.target.value)} />
      <h1>My name is {value}</h1>
    </div>
  )
}

export default App

// import React , {useState,useEffect} from 'react'

// const App = () => {
//   const[value,setValue]=useState("");

//   const[data,setData]=useState([]);
//   useEffect( ()=>{
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//     .then((res)=>res.json())
//     .then((d) => setData(d.categories))
//   },[]
// )
//   return ( 
//     <div>
//         <input onChange={(e)=>setValue(e.target.value)} />
//       {data.filter((item,index)=>item.strCategory.toLowerCase().includes(value))
//       .map((item,index)=>{
//         return(
          
//           <div key={item.idCategory}>
//             <p>{item.strCategory}</p>
//           <img src={item.strCategoryThumb} alt="" />
//           </div>
//         )
//       })

//       }
//     </div>
//   )
// }

// export default App
// import React ,{useState,useEffect} from 'react'

// const App = () => {
//   const [data,setData] = useState([])
//   const [value,setValue]= useState("")
//   useEffect(()=>{
//     fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//     .then((res)=>res.json())
//     .then((d)=>setData(d.meals))
//   },[]
//   )
//   return (
//     <div style={{textAlign:"center"}}>
//           <input onChange={(e)=>setValue(e.target.value)} />
//       {data.filter((item,index)=>item.strMeal.toLowerCase().includes(value))

//       .map((item,index)=>{
//         return(
//           <div key={item.idMeal} >
//             <p>{item.strMeal}</p>
//             <img src={item.strMealThumb} alt=""  />
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default App