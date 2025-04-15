import React,{useState} from 'react'

const App = () => {
    const images=["https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg",
        "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg",
"https://cdn.pixabay.com/photo/2023/10/20/03/36/mushrooms-8328101_640.jpg"    ]
    const [currentIndex,setCurrentIndex] = useState(0);

    function handlePrev(){
        setCurrentIndex((currentIndex-1+images.length)%images.length);
    }

    function handleNext(){
        setCurrentIndex((currentIndex+1)%images.length)
    }
  return (
    <div>
        <button onClick={handlePrev}>Prev </button>
        <img src={images[currentIndex]} alt="" />
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App