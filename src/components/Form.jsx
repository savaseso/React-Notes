import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            Age: '',
            gender:'',
            location:'',
            vegeterian:false,
            kosher:false,
            lactosefree:false
            

        }
    this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value,type,checked}=event.target
        type==="checkbox" ? this.setState({[name]:checked}) : this.setState({[name]:value})
    }
    render(){
        return(
            <div>
                <form >
                 {/* input */}
                <input name="firstName" value={this.state.firstName} placeholder="first Name" onChange={this.handleChange}/>
                <br/>
                <input  name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
                <br/>
                <input  name="Age" value={this.state.Age} placeholder="Your age" onChange={this.handleChange}/>
                <br/>
                {/* radio */}
                <label>
                <input type="radio"name="gender" value ="female" checked = {this.state.gender==='female'} onChange={this.handleChange}/>Female
                </label>
                <label>
                <input type="radio"name="gender" value ="male" checked = {this.state.gender==='male'} onChange={this.handleChange}/>Male
                </label>
                <br/>
                {/* select */}
                <select value={this.state.location} name="location" onChange={this.handleChange} >
                    <option value="">Please choose a location</option>
                    <option value="NewYork">NewYork</option>
                    <option value="Budapest">Budapest</option>
                    <option value="Toronto">Toronto</option>
                </select>
                <br/>
                {/* checkbox */}
                <label>
                    <input type="checkbox"name="vegeterian" onChange={this.handleChange} checked = {this.state.vegeterian} />is Vegan?
                </label>
                <br/>
                <label>
                    <input type="checkbox"name="kosher" onChange={this.handleChange} checked = {this.state.kosher} />is kosher?
                </label>
                <br/>
                <label>
                    <input type="checkbox"name="lactosefree" onChange={this.handleChange} checked = {this.state.lactosefree} />is lactosefree?
                </label>
                <br/>
                
                <button>Submit</button>
                </form>
                <h1>Entered informations:</h1>
                <p>
                   Your name: {this.state.firstName} {this.state.lastName}
                </p>
                <p>Your Age:{this.state.Age} </p>
                <p>Your Gender:{this.state.gender} </p>
                <p>Your Location is: {this.state.location}</p>
                <h2>What kind of eater are you?</h2>
                <p>Vegeterian:{this.state.vegeterian?"Yes":"No"}</p>
                <p>kosher:{this.state.kosher?"Yes":"No"}</p>
                <p>lactosefree:{this.state.lactosefree?"Yes":"No"}</p>
                

            </div>
        )
    }
}
export default Form