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
        <iframe width="960" height="540" src="https://indiechristianflix.b-cdn.net/cyc.mp4" frameborder="0" allowfullscreen></iframe>
        </div>

      </div>
    )
  }
}
export default App;
