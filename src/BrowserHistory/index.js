import React, {Component} from 'react'
import InnerItem from '../InnerItem'
import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    initialList: this.props.initialHistoryList,
  }

  deleteTodo = id => {
    const {initialList} = this.state
    const updatedList = initialList.filter(eachItem => eachItem.id !== id)
    this.setState({
      initialList: updatedList,
    })
  }

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, initialList} = this.state
    const filteredList = initialList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className='bg-container'>
        <div className='upperPart'>
          <img
            src='https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png'
            alt='app logo'
            className='app-logo'
          />
          <div className='input-container'>
            <img
              src='https://assets.ccbp.in/frontend/react-js/search-img.png'
              alt='search'
              className='search-icon'
            />
            <div>
              <input
                type='search'
                placeholder='Search history'
                onChange={this.onChangeInput}
                className='search-input'
                value={searchInput}
              />
            </div>
          </div>
        </div>
        <div className='lowerPart'>
          {filteredList.length > 0 ? (
            <ul className='destinations-list'>
              {filteredList.map(eachItem => (
                <InnerItem
                  key={eachItem.id}
                  destinationDetails={eachItem}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
          ) : (
            <p>
              {initialList.length === 0
                ? 'Empty History View'
                : 'No history found'}
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
