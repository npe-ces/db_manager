import React, { Component } from 'react';
import './App.css';
import Main from './Page/mainpage/Main';
import Nav from './Page/navbar/Nav';
class App extends Component {
  render() {
    return (
      <section>
        <Nav/>
        <Main/> 
      </section>
    );
  }
}

export default App;
