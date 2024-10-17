import React, { Component } from "react";

class Search extends Component {
  state = {
    search: '',
    type: '',
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  handleFilter = (e) => {
        this.setState(
            () => ({type: e.target.dataset.type }),
            () => {this.props.searchMovies(this.state.search, this.state.type)}

        )
  }

  render() {
    return (
      <div className="row">
        <div
          className="col s12"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            className="validate"
            placeholder="Search"
            id="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="waves-effect waves-light btn-small #827717 lime darken-4"
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              datatype="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              datatype="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              datatype="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              datatype="game"
              onChange={this.handleFilter}
              checked={this.state.type === "game"}
            />
            <span>Games</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
