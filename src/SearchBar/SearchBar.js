import React, { Component } from 'react'
import './SearchBar.css'
import Filters from '../Filters/Filters';
import BookList from '../BookList/BookList';

class SearchBar extends Component {
    

    render() {
        return (
            <div>
                <div className = "searchBar">
                    <form 
                        className = "searchForm" 
                        id = "searchForm"
                        onSubmit = {e => {
                            e.preventDefault();
                            const term = (document.getElementById('bookTitle').value)
                            this.props.handleSearchTerm(term)
                        }}
                        >
                        <label htmlFor="bookTitle">Search:</label>
                        <input 
                            type="text"
                            name="bookTitle"
                            placeholder = "Book Title"
                            ref = 'searchTerm'
                            id="bookTitle"
                        >
                        </input>
                        <button type="submit" htmlFor="searchForm">Submit</button>
                    </form>
                </div>
                <Filters onPrintTypeChange={type => this.props.handlePrintType(type)} onBookTypeChange={bookType => this.props.handleBookType(bookType)}/>
            </div>
            
        )
    }
}

export default SearchBar
