import React, { Component } from 'react'
import Procomponent from './components/Propcomponent'


export default class App extends Component {
    state = {
        sname: "Abhishek",
        age: 21,
        Subject: "FullStackDevelopment",
        section: "Section D"
    }
  render() {
    return (
      <div>
        <Procomponent section ={this.state.section}/>
    I am {this.state.sname} I am {this.state.age} learning {this.state.Subject}
      </div>
    )
  }
}
// create a parent component with sman,rollno and marks and print the in child component 