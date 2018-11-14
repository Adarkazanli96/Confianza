import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux'
import JournalistPage from './containers/JournalistPage/JournalistPage'
import HomePage from './containers/HomePage/HomePage'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      homepage: true
    }
  }

  //handler for switching from homepage to journalist page
  switchPageHandler = () => {
    this.setState({ homepage: false })
  }

  render() {

    let page = <HomePage clicked={this.switchPageHandler} />;

    if (!this.state.homepage) {
      page = <JournalistPage />
    }

    return (
      <Aux>
        {page}
      </Aux>
    );
  }
}

export default App;
