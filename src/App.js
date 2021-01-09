import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
      isLoading: true,
      movies: []
  };
  getMovies = async() => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // axios가 끝날때까지 기다렸다가 진행해라! axios는 시간이 좀 필요하기 때문이다.
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading } = this.state;
    return( 
    <div>
      {isLoading ? "Loading..." : "We are ready"}
    </div>
    )
  }
}

export default App;
