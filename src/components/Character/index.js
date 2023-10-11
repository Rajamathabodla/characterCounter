import {Component} from 'react'
import {v4} from 'uuid'
import Word from '../Word'
import './index.css'

class Character extends Component {
  state = {inputValue: '', newList: []}

  onchangeValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onclickbtn = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const newWord = {
      id: v4(),
      input: inputValue,
    }
    this.setState(preve => ({
      newList: [...preve.newList, newWord],
      inputValue: '',
    }))
  }

  render() {
    const {inputValue, newList} = this.state

    return (
      <div className="app-container">
        <div className="innerContainer">
          <div className="counter">
            <h1 className="heading">Count the characters like a Boss</h1>
            {newList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="imgSize"
              />
            ) : (
              <ul>
                {newList.map(each => (
                  <Word key={each.id} details={each} />
                ))}
              </ul>
            )}
          </div>
          <div className="enterCharacter">
            <h1 className="characterHeading">Character Counter</h1>
            <form className="inputcontainer" onSubmit={this.onclickbtn}>
              <input
                type="text"
                value={inputValue}
                onChange={this.onchangeValue}
                className="input"
                placeholder="Enter the Characters here"
              />
              <button type="submit" className="buttonAdd">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Character
