import React, { Component } from 'react'
import { connect } from "react-redux";
import { requestData } from './redux';
import logo from './logo.svg'
import './App.css'

type Props = {
  requestData: () => void
}

class App extends Component<Props> {

  state = {
    names: []
  }

  componentDidMount() {
    this.props.requestData()
  }
  
  render() {
    const { names } = this.state
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ul> {names.map(names => <li>{names.name}</li>)} </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
    return {
      names: state.names,
    };
};


const mapDispatchToProps = {
  requestData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)