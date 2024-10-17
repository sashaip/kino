import React, { Component } from "react";
import { Movies } from "../component/Movies";
import { Search } from "../component/Search";
import { Preloader } from "../component/Preloader";
const API_KEY = process.evn.REACT_APP_API_KEY

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=${API}&s=Max")
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str, type = '') => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b2035da2&s=${str}`)
    //   type !== 'all' ? `&type=${type}` : '' 
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
