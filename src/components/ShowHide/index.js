import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstNameStatus: false, lastNameStatus: false}

  firstNameShowcase = () => {
    this.setState(prevState =>
      prevState.firstNameStatus === true
        ? {firstNameStatus: false}
        : {firstNameStatus: true},
    )
  }

  lastNameShowcase = () => {
    this.setState(prevState =>
      prevState.lastNameStatus === true
        ? {lastNameStatus: false}
        : {lastNameStatus: true},
    )
  }

  render() {
    const {firstNameStatus, lastNameStatus} = this.state

    let isShowFirstName = ''
    if (firstNameStatus === true) {
      isShowFirstName = (
        <div className="Show-Hide-container">
          <p className="name-heading">Joe</p>
        </div>
      )
    }

    let isShowLastName = ''
    if (lastNameStatus === true) {
      isShowLastName = (
        <div className="Show-Hide-container">
          <p className="name-heading">Jonas</p>
        </div>
      )
    }

    return (
      <div className="main-bg-container">
        <h1>Show/Hide</h1>
        <div className="container-show-card">
          <div className="name-card-container">
            <button
              onClick={this.firstNameShowcase}
              className="button-style"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {isShowFirstName}
          </div>
          <div className="name-card-container">
            <button
              onClick={this.lastNameShowcase}
              className="button-style"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {isShowLastName}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
