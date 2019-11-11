import React, { Component } from 'react'

class Search extends Component {
  state = {
    query: ''
  }

  inputChangeHandler = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <>
        <form>
          <input 
            placeholder='Search for..'
            ref={input => this.search = input}
            onChange={this.inputChangeHandler}
          />
          <p>{this.state.query}</p>
        </form>
      </>
    )
  }
}

export default Search