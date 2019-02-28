import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"
import ApiCallFetch from "./components/ApiCallFetch"

class App extends Component {

  render() {
    return (
      <div className="App">
         <Form />
         <ApiCallFetch />
         
      </div>
    );
  }
}

export default App;
