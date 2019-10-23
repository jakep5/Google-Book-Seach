import React from 'react';
import "./App.css";
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      books : [],
      showBookDescription: false,
      printType: 'all',
      bookType: '',
      url: 'https://www.googleapis.com/books/v1/volumes?keyAIzaSyAxOUySM6fNOlFXHaxvO7wiaZTkanchXus&maxResults=20&q='
    }

  }

  changeSearchTerm (string) {
    this.setState({
       searchTerm: string,
    })
  }

  changePrintTypeFilter (type) {
    this.setState ({
      printType: type,
    })
  }
  
  changeBookTypeFilter (bookType) {
    this.setState({
      bookType: bookType,
    })
  }

  updateBooks(data) {
    this.setState({
      books: [data],
    })
    console.log(this.state.books)
  }
  
  componentDidUpdate() {
    const url = this.state.url + this.state.searchTerm
    fetch (url)
      .then (response => {
        if(!response.ok) {
          throw new Error ('Something went wrong, please try again.')
        }
        else {
          return response
        }
      })
      .then (response => response.json())
      .then(data => this.updateBooks(data))
      .catch (err => {
        alert(err.message)
        })
      }


  render() {
    return (
      <main className='App'>
        <div className = "App">
          <div className = "title">
            <h1>Google Book Search</h1>
          </div>
          <SearchBar 
            handleSearchTerm = {string => this.changeSearchTerm(string)}
            handlePrintType = {type => this.changePrintTypeFilter(type)}
            handleBookType = {bookType => this.changeBookTypeFilter(bookType)}/>
          <BookList 
            books = {this.state.books} />
        </div>
      </main>
    );
  }
}

export default App;