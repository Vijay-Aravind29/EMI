import React, { useState } from 'react'
const api={
    baseUrl:"https://api.openweathermap.org/data//weather",
    key:"a67532da5c1f94cb987e3381ee461fad"
}
const App = () => {
    const [weather,setWeather]=useState({})
    const [search,setSearch]=useState("")

    function handleSearch(){
        fetch(`${api.baseUrl}?q=${search}&appid=${api.key}`)
        .then((response)=>response.json())
        .then((d)=>setWeather(d))
    }
  return (
    <div>
        <input placeholder="Search City" onChange={(e)=>setSearch(e.target.value)} />


        <button onClick={handleSearch}>Search</button>
        {weather.main !== undefined ?(
        <div>
            <p>{weather.name}</p>

            <p>{weather.main.temp}</p>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
        </div>
        ):(<p>Not Found</p>)
        }
    </div>
  )
}

export default App