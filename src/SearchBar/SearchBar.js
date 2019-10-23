import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

    handleSubmit(e) {
        e.preventDefault();

    }
    render() {
        return (
            <div className = "searchBar">
                <form classname = "searchForm" id = "searchForm">
                    <label htmlFor="bookTitle">Search:</label>
                    <input 
                        type="text"
                        name="bookTitle"
                        placeholder = "Book Title"
                        id="bookTitle"
                        onChange = {e => this.props.handleSearchTerm(e.target.value)}
                    >
                    </input>
                    <button type="submit" htmlFor = "searchForm">Search</button>
                </form>
            </div>
        )
    }
}
