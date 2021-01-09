

function Food({name, picture}){
  return <div><h1>I Like {name}</h1>
  <img src={picture} alt={name}/>
  </div>
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    img: "https://t16.pimg.jp/063/894/506/0/63894506.jpg"
  },
  {
    id: 2,
    name: "bab",
    img: "https://en.pimg.jp/053/525/791/1/53525791.jpg"
  }
];

function renderFood(dish){
  console.log(dish);
  return <Food name= {dish.name} picture= {dish.img} />
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {
        foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture = {dish.img}/>
        ))
      }
      

    </div>
  );
}

export default App;
