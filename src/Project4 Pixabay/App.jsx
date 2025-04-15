import React, { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch( 
        `https://pixabay.com/api/?key=49484249-563cbf0b93719f746fbd7a59f&q=${search}&image_type=photo` )
      .then((res) => res.json())
      .then((d) => setData(d.hits));
  });
  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={item.largeImageURL}
              height={item.webformatHeight}
              width={item.webformatWidth}
              alt=""
            />
            ;
          </div>
        );
      })}
    </div>
  );
};

export default App;
