import React,{ Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    userName : "Daniel",
    paragrah1 : "Create TWO new components: UserInput and UserOutput",
    paragrah2 : "UserInput should hold an input element, UserOutput two paragraphs"
  };
  
  nameHandler = (event) =>{
    this.setState({
        userName : event.target.value
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, This is my first Task</h1>
          <UserInput 
            userName={this.state.userName}
            changed={this.nameHandler.bind(this)}>
          </UserInput>
          <UserOutput 
          userName={this.state.userName}
          paragrah1 ={this.state.paragrah1}
          paragrah2 ={this.state.paragrah2}
          ></UserOutput>
        </header>
      </div>
    )
    }
}

export default App;

