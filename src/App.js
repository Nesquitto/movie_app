import Proptypes from "prop-types";

function Food({name, picture, rating}){
  return <div><h1>I Like {name}</h1>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
 name: Proptypes.string.isRequired,
 picture: Proptypes.string.isRequired,
 rating: Proptypes.number
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    img: "https://t16.pimg.jp/063/894/506/0/63894506.jpg",
  },
  {
    id: 2,
    name: "bab",
    img: "https://en.pimg.jp/053/525/791/1/53525791.jpg",
    rating: 5
  }
];

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {
        foodILike.map(dish => (
          <Food 
          key={dish.id} 
          name={dish.name} 
          picture = {dish.img} 
          rating = {dish.rating}/>
        ))
      }
      

    </div>
  );
}

export default App;
