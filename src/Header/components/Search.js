import React, {Component} from 'react'

class Search extends Component {
  constructor() {
    super()
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e){
    e.preventDefault()
    const searchValue = e.target.search.value
    this.props.fetchAPI(searchValue)
    e.target.search.value = ""
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input type="text" name="search" placeholder="Search for movie...."/>
        </form>
      </div>
    )
  }
}

export default Search
