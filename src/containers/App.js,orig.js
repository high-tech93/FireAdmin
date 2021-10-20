import React, {Component,PropTypes} from 'react'
import {Link} from 'react-router'
import NavBar from '../components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="content">
        <NavBar></NavBar>
        <h3>Welcome to Carry Your Cross Ministries Dashboard</h3>
        <br />
        
        <br/>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SSbs7pVQBds?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>

        <br />
        <h4>!! v1.1 Update - PLEASE WATCH VIDEO BELOW. App Updating Fix !!</h4>
        <br />
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tu7zfZ3gvvM?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>

      </div>
    )
  }
}
export default App;
