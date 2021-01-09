import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
      isLoading: true,
      movies: []
  };
  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // axios가 끝날때까지 기다렸다가 진행해라! axios는 시간이 좀 필요하기 때문이다.
    console.log(movies);
    this.setState({movies, isLoading: false})
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return( 
    <div>
      {isLoading ? "Loading..." : movies.map(movie => (
       <Movie 
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        />
      ))}
    </div>
    )
  }
}

export default App;
