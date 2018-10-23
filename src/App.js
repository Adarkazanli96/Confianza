import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux'
import JournalistPage from './containers/JournalistPage/JournalistPage'

class App extends Component {
  render() {
    return (
      <Aux>
        <JournalistPage/>
      </Aux>
    );
  }
}

export default App;
