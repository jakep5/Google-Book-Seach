import React, { Component } from 'react'
import Book from '../Book/Book';
import BookDescription from '../BookDescription/BookDescription';

export class BookList extends Component {
    
    render() {
        const bookList = ((this.props.bookArray[0].items).map((book, i) => 
            <Book {...book} key = {i}/>
        ))
        return (
            <div>
                {bookList}
            </div>
        )
    }
}

export default BookList
