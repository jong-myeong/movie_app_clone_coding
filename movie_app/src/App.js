import React from 'react';

function Movie({ name, picture }) {
  return (
  <div>
    <h2>I love { name }</h2>
    <img src={ image } />
  </div>
  );
}

const moviesILike = [
  {
    name: "Iron Man",
    image: "https://images-na.ssl-images-amazon.com/images/I/71lVAGaqBtL._AC_SY879_.jpg"
  },
  {
    name: "Captain America",
    image: "https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/9j2Fy3gE-1.jpeg"
  },
  {
    name: "Spider Man",
    image: "https://images-na.ssl-images-amazon.com/images/I/51UL0SttePL._AC_.jpg"
  },
  {
    name: "Avengers",
    image: "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg"
  },
];

function App() {
  return (
  <div>
    {moviesILike.map(movie => (
      <Movie name={movie.name} picture={movie.image} />
    ))}
  </div>
  );
}

export default App;