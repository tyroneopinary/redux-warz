import React, { Component } from 'react'
import { connect } from "react-redux";
import { requestData } from './redux';
import logo from './logo.svg'
import './App.css'

class App extends Component {

  state = {
    items: {
      results: []
    }
  }

  componentDidMount() {
    this.props.requestData()
  }

  render() {
    const { items } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {items
          ? (<ul>{items.results.map(item => <li key={item.name}>{item.name}</li>)} </ul>)
          : <p> loading...</p>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ items: state.items })

const mapDispatchToProps = { requestData }

export default connect(mapStateToProps, mapDispatchToProps)(App)