import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import ApiCallFetch from "./components/ApiCallFetch";
import MovieTable from './components/MovieTable';

class App extends Component {

  render() {
    return (
      <div className="App">
         <Form />
         <ApiCallFetch />
         <MovieTable />   
      </div>
    );
  }
}

export default App;
