import React from 'react';

function Movie({ name, picture }) {
  return (
  <div>
    <h2>I love { name }</h2>
    <img src={ picture } alt={ name }/>
  </div>
  );
}

const moviesILike = [
  {
    id: 1,
    name: "Iron Man",
    image: "https://images-na.ssl-images-amazon.com/images/I/71lVAGaqBtL._AC_SY879_.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Captain America",
    image: "https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/9j2Fy3gE-1.jpeg",
    rating: 4.5
  },
  {
    id: 3,
    name: "Spider Man",
    image: "https://images-na.ssl-images-amazon.com/images/I/51UL0SttePL._AC_.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Avengers",
    image: "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg",
    rating: 4.9
  },
];

function App() {
  return (
  <div>
    {moviesILike.map(movie => (
      <Movie key={movie.id} name={movie.name} picture={movie.image} />
    ))}
  </div>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number,
};

export default App;