import React, { Component } from 'react'
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like';


export class MovieTable extends Component {
    state = {
        movies: getMovies()
        }
yű

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies:movies})
        };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
      }


  render() {
    const {length: count} = this.state.movies;
    if(count === 0) {
      return <h2>There are no movies in the database.</h2>
    } 
    return (
      <div>
        <h2>Showing {count} movies in the database.</h2>
       <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {this.state.movies.map((movie)=>{
                return(
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)} /></td>
                      <td><button className="btn btn-danger btn-sm"onClick={() => this.handleDelete(movie)}>Delete</button></td>
                    </tr>)
                  })}
         </tbody>     
        </table>
        </div>
    )
  }
}

export default MovieTable
