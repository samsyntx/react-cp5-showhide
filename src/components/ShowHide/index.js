import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  render() {
    return (
      <div className="main-bg-container">
        <h1>Show/Hide</h1>
        <div className="container-show-card">
          <div className="name-card-container">
            <button type="button">Show/Hide Firstname</button>
            <div className="Show//Hide-container">
              <h1>Joe</h1>
            </div>
          </div>
          <div className="name-card-container">
            <button type="button">Show/Hide Firstname</button>
            <div className="Show//Hide-container">
              <h1>Joe</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
