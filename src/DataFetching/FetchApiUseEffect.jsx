import React , {useState,useEffect} from 'react'

const App = () => {
  const[data,setData]=useState([]);
  useEffect( ()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res)=>res.json())
    .then((d) => setData(d.categories))
  },[]
)
  return (
    <div>

      {data.map((item,index)=>{
        return(
          <div key={item.idCategory}>
            <p>{item.setCategory}</p>
          <img src={item.strCategoryThumb} alt="" />
          </div>
        )
      })

      }
    </div>
  )
}

export default App