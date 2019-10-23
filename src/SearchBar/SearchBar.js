import React, { Component } from 'react'
import './SearchBar.css'
import Filters from '../Filters/Filters';
import BookList from '../BookList/BookList';

export default class SearchBar extends Component {

 
    render() {
        return (
            <div>
                <div className = "searchBar">
                    <form 
                        className = "searchForm" 
                        id = "searchForm"
                        onSubmit = {e => {
                            e.preventDefault();
                            this.props.handleSearchTerm(document.getElementById('bookTitle').value)
                        }}>
                        <label htmlFor="bookTitle">Search:</label>
                        <input 
                            type="text"
                            name="bookTitle"
                            placeholder = "Book Title"
                            ref = 'searchTerm'
                            id="bookTitle"
                        >
                        </input>
                        <button type="submit" htmlFor="searchForm">Search</button>
                    </form>
                </div>
                <Filters />
            </div>
            
        )
    }
}
