import React from "react";


const App =() =>{
  function dark(){
    document.body.style.background="black";
    document.body.style.background="white";
  }

  function light(){
    document.body.style.background="white";
    document.body.style.background="black";
  }
  return(
    <div>
    <button onClick={dark}>Dark</button>
    <button onClick={light}>Light</button>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempora ea nesciunt qui at sequi fugit facere dolorum deserunt numquam eligendi eveniet nam delectus, veritatis ipsum alias unde dolor architecto ipsam saepe dolorem sit cum a. Dolor sequi aliquid quam sint esse officia alias cupiditate voluptas. Nam porro distinctio qui autem accusantium ut possimus, laboriosam dolore voluptas iusto doloribus similique culpa eius aspernatur aperiam facere blanditiis corporis consequatur. Id hic rem obcaecati officiis ea rerum delectus vel repellendus possimus? Dolor quaerat corporis reiciendis voluptatibus quisquam maxime perspiciatis, expedita ipsum cum qui porro veritatis enim libero aperiam quod dicta! Itaque, ex!</p>
   
    </div>
  )
}
export default App;