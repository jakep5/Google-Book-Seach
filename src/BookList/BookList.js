import React, { Component } from 'react'
import Book from '../Book/Book';
import BookDescription from '../BookDescription/BookDescription';

export class BookList extends Component {
    render() {
        const bookList = this.props.bookArray.map((book, i) => 
            <Book />
        )
        
        return (
            <div>
                {bookList}
            </div>
        )
    }
}

export default BookList
