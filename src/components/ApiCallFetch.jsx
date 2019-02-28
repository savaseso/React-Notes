import React, { Component } from 'react';

class ApiCallFetch extends Component {
    constructor(){
        super();
        this.state={
            loading: false,
            character:{}
        }
    }
    
  componentDidMount(){
    this.setState({loading:true})
    fetch('https://swapi.co/api/people/4/')
    .then((res)=>res.json())
    .then((data)=>{
      this.setState(
        { loading:false,
          character:data
      })
    })
}
    render(){
        return(
            <div>
                <h1>{this.state.loading?"Loading...":this.state.character.name}</h1> {/* conditional rendering */}
            </div>
        )
    }
}
export default ApiCallFetch