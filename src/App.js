import React, { Component } from 'react';
import axios from './axios-orders'
import Aux from './hoc/Aux/Aux'
import JournalistPage from './containers/JournalistPage/JournalistPage'
import HomePage from './containers/HomePage/HomePage'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      homepage: true,
      nameSearched: "",
      journalistPageNameSearch: "",
      failedNameSearch: "",
      showError: false
    }
  }

  //handler for switching from homepage to journalist page
  switchPageHandler = async () => {

    let exists;

    // check if it exists through database
    await axios.get('https://confianza-f74d4.firebaseio.com/' + this.state.nameSearched.toLowerCase() + '/exists.json')
      .then(response => {
        exists = response.data;
      })

    if (exists == true) {
      this.setState({ homepage: false })
    }
    else {
      this.setState({ showError: true, failedNameSearch: this.state.nameSearched })
    }
  }

  setNameHandler = (event) => {
    this.setState({
      nameSearched: event.target.value
    })
  }

  render() {

    let page = <HomePage
      clicked={this.switchPageHandler}
      nameChange={(event) => this.setNameHandler(event)}
      nameValue={this.state.nameSearched}
      failedNameSearch={this.state.failedNameSearch}
      showError={this.state.showError}
    />

    if (!this.state.homepage) {
      page = <JournalistPage
        journalistName={this.state.nameSearched} />
    }



    return (
      <Aux>
        {page}
      </Aux>
    );
  }
}

export default App;
