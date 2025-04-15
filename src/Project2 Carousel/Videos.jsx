import React,{useState} from 'react'

const App = () => {
        const videos=["https://www.youtube.com/embed/1F3hm6MfR1k?si=vekEPbkQt-VuphnB",
            "https://www.youtube.com/embed/WR8PyAhn6tQ?si=EsRPsYcMvhluSwgl",
            "https://www.youtube.com/embed/OsLCY3vz3t8?si=fwotC0eoVa8Tx3Ng"
        ]
        const [currentIndex,setCurrentIndex]=useState(0);
         
        function handlPrev(){
            setCurrentIndex((currentIndex-1+videos.length)%videos.length)
        }
        function handleNext(){
            setCurrentIndex((currentIndex+1)%videos.length)
        }



  return (
    <div>
        <button onClick={handlPrev}>Prev</button>
        <iframe width="560" height="315" src={videos[currentIndex]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App